from rest_framework import serializers
from .models import PhoneNumber, Language, UserType, User

class PhoneNumberSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhoneNumber
        fields = '__all__'

class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = '__all__'

class UserTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserType
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    phone_number = PhoneNumberSerializer()
    language = LanguageSerializer()
    user_type = UserTypeSerializer()

    class Meta:
        model = User
        fields = '__all__'
