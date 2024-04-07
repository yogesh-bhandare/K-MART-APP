from django.contrib import admin
from .models import PhoneNumber, Language, UserType, User
from .serializers import UserSerializer

class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'display_phone_number', 'display_language', 'display_user_type')

    def display_phone_number(self, obj):
        return obj.phone_number.number

    def display_language(self, obj):
        return obj.language.name

    def display_user_type(self, obj):
        return obj.user_type.type

admin.site.register(PhoneNumber)
admin.site.register(Language)
admin.site.register(UserType)
admin.site.register(User, UserAdmin)
