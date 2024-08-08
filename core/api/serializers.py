from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        extra_kwargs = {"password":{"write_only":True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create(**validated_data)
        return user
    

