from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from api.views import CreateUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('api/user/register/', CreateUserView.as_view(), name="register"),
    # path('api/token/', TokenObtainPairView.as_view(), name="get_token"),
    # path('api/token/refresh/', TokenRefreshView.as_view(), name="refresh"),
    # path('api-auth/', include("rest_framework.urls")),
    path('', include('logs.urls')),
    path('api/content/', include('content_aggregator.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
