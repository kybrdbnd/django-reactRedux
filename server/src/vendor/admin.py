from django.contrib import admin
from .models import (CompanyModel, PackageModel)


# Register your models here.


class CompanyAdmin(admin.ModelAdmin):
    list_display = ['name', 'owner', 'created_at', 'updated_at']


class PackageAdmin(admin.ModelAdmin):
    list_display = ['name', 'company', 'description',
                    'price', 'package_extra_info', 'trial_price', 'created_at', 'updated_at']


admin.site.register(CompanyModel, CompanyAdmin)
admin.site.register(PackageModel, PackageAdmin)
