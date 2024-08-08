from rest_framework.serializers import ModelSerializer
from .models import Articles, Events, GovSchemes, News

class ArticleSerializer(ModelSerializer):
    class Meta:
        model = Articles
        fields = "__all__"

    
class EventSerializer(ModelSerializer):
    class Meta:
        model = Events
        fields = "__all__"

    
class SchemeSerializer(ModelSerializer):
    class Meta:
        model = GovSchemes
        fields = "__all__"

    
class NewSerializer(ModelSerializer):
    class Meta:
        model = News
        fields = "__all__"

    