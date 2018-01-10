from django.db import models
from django.conf import settings
# from django.contrib.postgres.fields import JSONField
# Create your models here.


class DateTime(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated_at = models.DateTimeField(auto_now_add=False, auto_now=True)

    class Meta:
        abstract = True


class Profile(DateTime):
    VENDOR = 'V'
    CUSTOMER = 'C'
    TYPE_PROFILE_CHOICES = (
        (VENDOR, 'Vendor'),
        (CUSTOMER, 'Customer')
    )
    user_type = models.CharField(max_length=2,
                                 choices=TYPE_PROFILE_CHOICES,
                                 default=CUSTOMER)
    user = models.OneToOneField(settings.AUTH_USER_MODEL)

    def __str__(self):
        return self.user.username
