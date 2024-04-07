from django.db import models

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

