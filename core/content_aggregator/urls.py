from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register("articles",views.ArticleView,basename="article")
router.register("events",views.EventView,basename="events")
router.register("news",views.NewsView,basename="news")
router.register("schemes",views.SchemeView,basename="schemes")

urlpatterns = router.urls
