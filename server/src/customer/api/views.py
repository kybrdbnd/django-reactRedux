from rest_framework.generics import ListAPIView
from .serializers import (UserSerializer)
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from common.models import (Profile)
from rest_framework_jwt.settings import api_settings


class UserDetailView(ListAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        user = User.objects.filter(id=self.request.user.id)
        return user


@api_view(['POST'])
def landing_step(request):
    if request.method == 'POST':
        check_user = User.objects.filter(
            username=request.data['username']).exists()
        if check_user:
            return Response({'Username Already Exists'},
                            status=status.HTTP_400_BAD_REQUEST)
        else:
            current_user = request.user
            current_user.username = request.data['username']
            current_user.save()
            jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
            jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
            payload = jwt_payload_handler(current_user)
            token = jwt_encode_handler(payload)
            request.data.pop('username')
            profile = Profile.objects.create(user=current_user,
                                             user_type='C',
                                             extra_info=request.data)
            profile.save()
            return Response({'token': token,
                             'message': 'Profile Created Successfully'},
                            status=status.HTTP_201_CREATED)
