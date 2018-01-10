from rest_framework.generics import ListAPIView
from .serializers import (UserSerializer)
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from common.models import (Profile)


class UserDetailView(ListAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        user = User.objects.filter(id=self.request.user.id)
        return user


@api_view(['POST'])
def update_username(request):
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
            profile = Profile.objects.create(user=current_user, user_type='C')
            profile.save()
            return Response({'Profile Created Successfully'},
                            status=status.HTTP_201_CREATED)
