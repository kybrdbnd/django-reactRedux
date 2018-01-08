from django.contrib import admin
from .models import (Company, Package, Profile)


class CompanyAdmin(admin.ModelAdmin):
    list_display = ['name', 'owner', 'created_at',
                    'updated_at', 'get_categories']


class PackageAdmin(admin.ModelAdmin):
    list_display = ['name', 'company', 'description',
                    'price', 'package_extra_info', 'trial_price',
                    'created_at', 'updated_at']


class ProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'phone_no']


admin.site.register(Company, CompanyAdmin)
admin.site.register(Package, PackageAdmin)
admin.site.register(Profile, ProfileAdmin)
