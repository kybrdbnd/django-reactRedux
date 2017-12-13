from django.conf.urls import url
from .views import (PackageUpdateView, PackageCreateView)


urlpatterns = [
    url(r'edit_package/(?P<id>\d+)',
        PackageUpdateView.as_view(), name='edit_package'),
    url(r'package_create/', PackageCreateView.as_view(),
        name='package_create')
]
