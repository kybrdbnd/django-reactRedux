from django.db import models
from django.conf import settings
from django.contrib.postgres.fields import JSONField
# Create your models here.


class DateTimeModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated_at = models.DateTimeField(auto_now_add=False, auto_now=True)

    class Meta:
        abstract = True


class Profile(DateTimeModel):
    user = models.OneToOneField(settings.AUTH_USER_MODEL)
    phone_no = models.CharField(max_length=10)

    def __str__(self):
        return self.user.username


class CompanyModel(DateTimeModel):
    name = models.CharField(max_length=100)
    owner = models.OneToOneField(settings.AUTH_USER_MODEL,
                                 related_name='owner')

    class Meta:
        verbose_name_plural = "Companies"

    def __str__(self):
        return self.name


class PackageModel(DateTimeModel):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.PositiveIntegerField()
    trial_price = models.PositiveIntegerField(null=True)
    package_extra_info = JSONField(null=True)
    company = models.ForeignKey(CompanyModel, related_name='company')

    def __str__(self):
        return self.name


class PackageImageModel(DateTimeModel):
    image = models.ImageField(upload_to='package_images')
    package = models.ForeignKey(PackageModel, related_name="package_image")
