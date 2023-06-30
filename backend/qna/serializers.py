from rest_framework import serializers
from .models import Qna

class QnaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Qna
        fields = (
            'id',
            'user_id',
            'user_name',
            'title',
            'content', 
        )