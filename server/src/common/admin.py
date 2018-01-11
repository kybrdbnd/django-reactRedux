from django.contrib import admin
from .models import (Profile)
# Register your models here.


class ProfileAdmin(admin.ModelAdmin):
    list_display = ('name', 'user_type')

    def name(self, obj):
        if obj.user_type == 'V':
            return obj.user.company.name
        else:
            return obj.user.username


admin.site.register(Profile, ProfileAdmin)
