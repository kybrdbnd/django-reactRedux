from rest_framework.permissions import AllowAny
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.views import APIView
from vendor.models import (CompanyModel, PackageModel)
from django.shortcuts import get_object_or_404
from .serializers import (CompanyDetailSerializer, CompanyListSerializer,
                          PackageListSerializer, PackageDetailSerializer,
                          UserSerializer)
from django.contrib.auth.models import User
from random import choice
from string import ascii_lowercase, digits
from django.contrib.auth import authenticate, login
from rest_framework.response import Response
from rest_framework import status
import requests
import json


class CompanyListView(ListAPIView):
    permission_classes = (AllowAny,)
    queryset = CompanyModel.objects.all()
    serializer_class = CompanyListSerializer


class CompanyDetailView(ListAPIView):
    serializer_class = CompanyDetailSerializer

    def get_queryset(self, *args, **kwargs):
        owner = self.request.user
        company = CompanyModel.objects.filter(owner=owner)
        return company


class PackageListView(ListAPIView):
    serializer_class = PackageListSerializer

    def get_queryset(self, *args, **kwargs):
        owner = self.request.user
        company = get_object_or_404(CompanyModel, owner=owner)
        packages = PackageModel.objects.filter(company=company)
        return packages


class PackageDetailView(RetrieveAPIView):
    queryset = PackageModel.objects.all()
    serializer_class = PackageDetailSerializer


class UserDetailView(ListAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        user = User.objects.filter(id=self.request.user.id)
        return user


def generate_random_username(length=8, chars=ascii_lowercase + digits, split=4, delimiter='-'):

    username = ''.join([choice(chars) for i in range(length)])

    if split:
        username = delimiter.join([username[start:start + split]
                                   for start in range(0, len(username),
                                                      split)])

    try:
        User.objects.get(username=username)
        return generate_random_username(length=length,
                                        chars=chars,
                                        split=split,
                                        delimiter=delimiter)
    except User.DoesNotExist:
        return username


def construct_auth_token_path(request):
    if request.is_secure():
        return 'https://{}'.format(request.get_host())
    else:
        return 'http://{}'.format(request.get_host())


class UserCreateView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request, format=None):
        user = User.objects.create_user(username=generate_random_username(),
                                        password=request.data['password'],
                                        first_name=request.data['first_name'],
                                        last_name=request.data['last_name'],
                                        email=request.data['email'])
        user.save()
        if user is not None:
            data = {
                'username': user.username,
                'password': request.data['password']
            }
            token_path = construct_auth_token_path(request)
            token_path += '/api-token-auth/'
            response = requests.post(token_path, data=data)
            jwt_token = json.loads(response.content.decode('utf-8'))['token']
            return Response({'token': jwt_token},
                            status=status.HTTP_201_CREATED)
        else:
            return Response(json.dumps({'message': 'u failed'}),
                            status=status.HTTP_400_BAD_REQUEST)
