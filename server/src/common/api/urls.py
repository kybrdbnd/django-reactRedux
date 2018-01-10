from django.conf.urls import url
from .views import (UserCreateView)


urlpatterns = [
    url(r'user_create/', UserCreateView.as_view(),
        name='user_create')
]
