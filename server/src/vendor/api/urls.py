from django.conf.urls import url
from .views import (CompanyListView, CompanyDetailView,
                    PackageListView, PackageDetailView,
                    UserDetailView, UserCreateView)

urlpatterns = [
    url(r'companies/', CompanyListView.as_view(), name='companies'),
    url(r'vendor_company/', CompanyDetailView.as_view(),
        name='company_list'),
    url(r'vendor/', UserDetailView.as_view(), name='vendor'),
    url(r'packages/', PackageListView.as_view(),
        name='package_list'),
    url(r'package-detail/(?P<pk>\d+)', PackageDetailView.as_view(),
        name='package_detail'),
    url(r'user_create/', UserCreateView.as_view(),
        name='user_create')

]
