from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ArticleSerializer, EventSerializer, SchemeSerializer, NewSerializer
from .models import Articles, Events, GovSchemes, News
# Create your views here.

class ArticleView(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Articles.objects.all()

class EventView(viewsets.ModelViewSet):
    serializer_class = EventSerializer
    queryset = Events.objects.all()

class SchemeView(viewsets.ModelViewSet):
    serializer_class = SchemeSerializer
    queryset = GovSchemes.objects.all()

class NewsView(viewsets.ModelViewSet):
    serializer_class = NewSerializer
    queryset = News.objects.all()

