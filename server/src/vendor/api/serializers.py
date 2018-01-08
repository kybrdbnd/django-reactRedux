from rest_framework.serializers import ModelSerializer, ImageField
from vendor.models import (Company, Package, PackageImage, Category)
from django.contrib.auth.models import User


class Base64ImageField(ImageField):
    """
    A Django REST framework field for handling image-uploads through
    raw post data.
    It uses base64 for encoding and decoding the contents of the file.

    Heavily based on
    https://github.com/tomchristie/django-rest-framework/pull/1268

    Updated for Django REST framework 3.
    """

    def to_internal_value(self, data):
        from django.core.files.base import ContentFile
        import base64
        import six
        import uuid

        # Check if this is a base64 string
        if isinstance(data, six.string_types):
            # Check if the base64 string is in the "data:" format
            if 'data:' in data and ';base64,' in data:
                # Break out the header from the base64 content
                header, data = data.split(';base64,')

            # Try to decode the file. Return validation error if it fails.
            try:
                decoded_file = base64.b64decode(data)
            except TypeError:
                self.fail('invalid_image')

            # Generate file name:
            # 12 characters are more than enough.
            file_name = str(uuid.uuid4())[:12]
            # Get the file name extension:
            file_extension = self.get_file_extension(file_name, decoded_file)

            complete_file_name = "%s.%s" % (file_name, file_extension, )

            data = ContentFile(decoded_file, name=complete_file_name)

        return super(Base64ImageField, self).to_internal_value(data)

    def get_file_extension(self, file_name, decoded_file):
        import imghdr

        extension = imghdr.what(file_name, decoded_file)
        extension = "jpg" if extension == "jpeg" else extension

        return extension


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'email', 'username')


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')


class CompanyListSerializer(ModelSerializer):
    class Meta:
        model = Company
        fields = ('id', 'name')


class CompanyDetailSerializer(ModelSerializer):
    owner = UserSerializer()
    categories = CategorySerializer(many=True)

    class Meta:
        model = Company
        fields = ('id', 'name', 'owner', 'categories')


class CompanyCreateSerializer(ModelSerializer):
    categories = CategorySerializer(many=True, required=False)

    class Meta:
        model = Company
        fields = ('name', 'categories')


class PackageListSerializer(ModelSerializer):
    class Meta:
        model = Package
        fields = ('id', 'name', 'description', 'price',
                  'trial_price', 'package_extra_info')


class PackageDetailSerializer(ModelSerializer):
    class Meta:
        model = Package
        fields = ('id', 'name', 'description', 'price',
                  'trial_price', 'package_extra_info')


class PackageImageSerializer(ModelSerializer):
    image = Base64ImageField(max_length=None, use_url=True)

    class Meta:
        model = PackageImage
        fields = ("id", "image", "package")
