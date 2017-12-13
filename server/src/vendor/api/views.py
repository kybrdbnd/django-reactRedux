from rest_framework.permissions import AllowAny
from rest_framework.generics import ListAPIView, RetrieveAPIView
from vendor.models import (CompanyModel, PackageModel)
from django.shortcuts import get_object_or_404
from .serializers import (CompanyDetailSerializer, CompanyListSerializer,
                          PackageListSerializer, PackageDetailSerializer,
                          UserSerializer)
from django.contrib.auth.models import User


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
