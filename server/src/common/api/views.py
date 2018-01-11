from random import choice
from string import ascii_lowercase, digits
import requests
import json
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework_jwt.settings import api_settings

def generate_random_username(length=8, chars=ascii_lowercase + digits, split=4, delimiter='-'):

    username = ''.join([choice(chars) for i in range(length)])

    if split:
        username = delimiter.join([username[start:start + split]
                                   for start in range(0, len(username),
                                                      split)])

    try:
        User.objects.get(username=username)
        return generate_random_username(length=length,
                                        chars=chars,
                                        split=split,
                                        delimiter=delimiter)
    except User.DoesNotExist:
        return username


def construct_auth_token_path(request):
    if request.is_secure():
        return 'https://{}'.format(request.get_host())
    else:
        return 'http://{}'.format(request.get_host())


def get_auth_token(request, data):
    token_path = construct_auth_token_path(request)
    token_path += '/api-token-auth/'
    response = requests.post(token_path, data=data)
    if response.status_code == 400:
        jwt_token = None
    else:
        jwt_token = json.loads(response.content.decode('utf-8'))['token']
    return jwt_token


class UserCreateView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request, format=None):
        user = User.objects.create_user(username=generate_random_username(),
                                        password=request.data['password'],
                                        first_name=request.data['first_name'],
                                        last_name=request.data['last_name'],
                                        email=request.data['email'])
        user.save()
        if user is not None:
            jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
            jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
            payload = jwt_payload_handler(user)
            jwt_token = jwt_encode_handler(payload)
            return Response({'token': jwt_token},
                            status=status.HTTP_201_CREATED)
        else:
            return Response({'message': 'u failed'},
                            status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([AllowAny])
def user_signIn(request):
    data = {
        'username': request.data['username'],
        'password': request.data['password']
    }
    jwt_token = get_auth_token(request, data)
    if jwt_token:
        user = User.objects.get(username=data['username'])
        if user.profile.user_type == 'C':
            next_url = '/profile'
        elif user.profile.user_type == 'V':
            next_url = '/company'
        return Response({
                        'token': jwt_token,
                        'next_url': next_url
                        },
                        status=status.HTTP_201_CREATED)
    else:
        return Response({'message': 'Not able to log in'},
                        status=status.HTTP_400_BAD_REQUEST)
