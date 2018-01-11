from rest_framework.serializers import ModelSerializer
from common.models import (Profile)
from django.contrib.auth.models import User


class ProfileSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = ('user_type', 'extra_info')


class UserSerializer(ModelSerializer):
    profile = ProfileSerializer()

    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name',
                  'email', 'username', 'profile')
