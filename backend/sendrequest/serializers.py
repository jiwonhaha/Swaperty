from rest_framework import serializers
from .models import requestData


class requestDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = requestData
        fields = '__all__'