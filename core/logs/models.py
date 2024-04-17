from django.db import models
from django.contrib.auth.models import User

class PhoneNumber(models.Model):
    number = models.CharField(max_length=20)

class Language(models.Model):
    name = models.CharField(max_length=100)

class UserType(models.Model):
    type = models.CharField(max_length=100)

class User(models.Model):
    username = models.CharField(max_length=100)
    phone_number = models.ForeignKey(PhoneNumber, on_delete=models.CASCADE)
    language = models.ForeignKey(Language, on_delete=models.CASCADE)
    user_type = models.ForeignKey(UserType, on_delete=models.CASCADE)

class crops(models.Model):
    crop_name = models.CharField(max_length=100)

class Register(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
