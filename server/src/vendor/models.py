from django.db import models
from django.conf import settings
from django.contrib.postgres.fields import JSONField
# Create your models here.


class DateTime(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated_at = models.DateTimeField(auto_now_add=False, auto_now=True)

    class Meta:
        abstract = True


class Category(DateTime):
    name = models.CharField(max_length=100)

    class Meta:
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.name


class Company(DateTime):
    name = models.CharField(max_length=100)
    owner = models.OneToOneField(settings.AUTH_USER_MODEL,
                                 related_name='company')
    categories = models.ManyToManyField(Category, related_name='categories')

    class Meta:
        verbose_name_plural = "Companies"

    def get_categories(self):
        return ", ".join([c.name for c in self.categories.all()])

    def __str__(self):
        return self.name


class Package(DateTime):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.PositiveIntegerField()
    trial_price = models.PositiveIntegerField(null=True)
    package_extra_info = JSONField(null=True)
    company = models.ForeignKey(Company, related_name='company')

    def __str__(self):
        return self.name


class PackageImage(DateTime):
    image = models.ImageField(upload_to='package_images')
    package = models.ForeignKey(Package, related_name="package_image")
