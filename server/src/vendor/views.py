# from rest_framework.decorators import api_view
from rest_framework.views import APIView
from .models import (PackageModel, CompanyModel)
# from django.shortcuts import get_object_or_404
from django.http import Http404
from rest_framework.response import Response
from .api.serializers import (PackageDetailSerializer, PackageImageSerializer)
from rest_framework import status
from rest_framework.parsers import (JSONParser,
                                    FormParser, MultiPartParser)


class PackageUpdateView(APIView):

    parser_classes = (JSONParser, FormParser,
                      MultiPartParser)

    def get_object(self, id):
        try:
            return PackageModel.objects.get(id=id)
        except PackageModel.DoesNotExist:
            raise Http404

    def post(self, request, id, format=None):
        package = self.get_object(id)
        serializer = PackageDetailSerializer(package, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id, format=None):
        package = self.get_object(id)
        serializer = PackageDetailSerializer(package, data=request.data)
        if serializer.is_valid():
            package.delete()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PackageCreateView(APIView):

    def post(self, request, format=None):
        owner = self.request.user
        company = CompanyModel.objects.get(owner=owner)
        serializer = PackageDetailSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(company=company)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
