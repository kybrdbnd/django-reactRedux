from django.conf.urls import url
from .views import (UserCreateView, user_signIn)


urlpatterns = [
    url(r'user_create/', UserCreateView.as_view(),
        name='user_create'),
    url(r'user_update/', UserCreateView.as_view(),
        name='user_update'),
    url(r'login/', user_signIn, name='login'),
]
