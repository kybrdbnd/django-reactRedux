from rest_framework.permissions import AllowAny
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.views import APIView
from vendor.models import (Company, Package, Category)
from django.shortcuts import get_object_or_404
from .serializers import (CompanyDetailSerializer, CompanyListSerializer,
                          PackageListSerializer, PackageDetailSerializer,
                          UserSerializer, CompanyCreateSerializer,
                          CategorySerializer)
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework import status
from common.models import Profile
from rest_framework.parsers import (JSONParser,
                                    FormParser, MultiPartParser)
from django.http import Http404


class CategoryListView(ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class CompanyListView(ListAPIView):
    permission_classes = (AllowAny,)
    queryset = Company.objects.all()
    serializer_class = CompanyListSerializer


class CompanyDetailView(ListAPIView):
    serializer_class = CompanyDetailSerializer

    def get_queryset(self, *args, **kwargs):
        owner = self.request.user
        company = Company.objects.filter(owner=owner)
        return company


class PackageListView(ListAPIView):
    serializer_class = PackageListSerializer

    def get_queryset(self, *args, **kwargs):
        owner = self.request.user
        company = get_object_or_404(Company, owner=owner)
        packages = Package.objects.filter(company=company)
        return packages


class PackageDetailView(RetrieveAPIView):
    queryset = Package.objects.all()
    serializer_class = PackageDetailSerializer


class UserDetailView(ListAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        user = User.objects.filter(id=self.request.user.id)
        return user


class CompanyCreateView(APIView):
    def post(self, request, format=None):
        categories = request.data.pop('categories')
        serializer = CompanyCreateSerializer(data=request.data)
        owner = User.objects.get(username=request.user.username)
        if serializer.is_valid():
            company = serializer.save(owner=owner)
            for category in categories:
                category = Category.objects.get(name=category)
                company.categories.add(category)
            profile = Profile.objects.create(user=owner,
                                             user_type='V',
                                             extra_info={"company_name": company.name})
            profile.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PackageUpdateCreateView(APIView):

    parser_classes = (JSONParser, FormParser,
                      MultiPartParser)

    def get_object(self, id):
        try:
            return Package.objects.get(id=id)
        except Package.DoesNotExist:
            raise Http404

    def post(self, request, format=None):
        owner = self.request.user
        company = Company.objects.get(owner=owner)
        serializer = PackageDetailSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(company=company)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, id, format=None):
        package = self.get_object(id)
        serializer = PackageDetailSerializer(package, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id, format=None):
        package = self.get_object(id)
        serializer = PackageDetailSerializer(package, data=request.data)
        if serializer.is_valid():
            package.delete()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
