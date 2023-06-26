from .models import CustomUser
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('email', 'last_login', 'date_joined', 'is_staff', 'username')
    
    
    # def create(self, validated_data):
    #     user = CustomUser.objects.create_user(
    #         email = validated_data['email'],
    #         nickname = validated_data['nickname'],
    #         username = validated_data['username'],
    #         password = validated_data['password']
    #     )
    #     return user
    # class Meta:
    #     model = CustomUser
    #     fields = ['nickname', 'email', 'username', 'password']  