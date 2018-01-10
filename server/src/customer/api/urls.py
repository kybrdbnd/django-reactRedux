from django.conf.urls import url
from .views import (UserDetailView, update_username)

urlpatterns = [
    url(r'profile/', UserDetailView.as_view(), name='customer'),
    url(r'update_username/', update_username, name='update_username'),
]
