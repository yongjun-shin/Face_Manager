# backend/post/serializers.py
from rest_framework import serializers
from .models import Post
from .models import NameAge
from .models import Review
from .models import FaceInput

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'content',
        )
        model = Post
        
class NameAgeSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'name',
            'age',
        )
        model = NameAge
        
class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = (
            'id',
            'title',
            'content'
        )
        
class FaceInputSerializer(serializers.ModelSerializer):
    class Meta:
        model = FaceInput
        fields = (
            'id',
            'do',
            'sr',
            'pn',
            'wt',
            'type_list',
            'image',
            'user_id'
        )
