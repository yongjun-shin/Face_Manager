from rest_framework import serializers
from .models import AiResult
from .models import MakeupText

class AiResultSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'user_id',
            'eye_lid',
            'eye_len',
            'eye_angle',
            'lip_len',
            'lip_thick',
            'nostril',
            'nose_len',
            'face_shape',
        )
        model = AiResult
        
class MakeupTextSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'user_id',
            'eye_lid',
            'eye_len',
            'eye_angle',
            'lip_len',
            'lip_thick',
            'nostril',
            'nose_len',
            'face_shape',
        )
        model = MakeupText
    