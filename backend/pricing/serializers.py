from rest_framework import serializers
from .models import Pricing

class PricingSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'date',
            'pay_type',
            'method',
            'price',
            'user_name',
            'user_id'
        )
        model = Pricing