from django.contrib import admin
from .models import (Profile)
# Register your models here.


class ProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'user_type')


admin.site.register(Profile, ProfileAdmin)
