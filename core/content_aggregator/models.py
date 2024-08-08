from django.db import models

class Articles(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField()
    image = models.ImageField(upload_to="Articles/Images")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name}"


class News(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField()
    date = models.DateField()
    image = models.ImageField(upload_to="News/Images")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name}"

class GovSchemes(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField()
    image = models.ImageField(upload_to="Schemes/Images")
    date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.name}"

class Events(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField()
    date = models.DateField()
    location = models.CharField(max_length=233)
    image = models.ImageField(upload_to="Events/Images")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name}"
    