from rest_framework import serializers
from .models import AiResult

class AiResultSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'user_id',
            'eye_len',
            'eye_angle',
            'lip_len',
            'lip_thick',
            'nostril',
            'nose_len',
            'face_shape',
        )
        model = AiResult
    