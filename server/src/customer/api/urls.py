from django.conf.urls import url
from .views import (UserDetailView, landing_step)

urlpatterns = [
    url(r'profile/', UserDetailView.as_view(), name='customer'),
    url(r'landing_step/', landing_step, name='landing_step'),
]
