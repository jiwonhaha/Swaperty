from rest_framework import serializers
from .models import contactUs

class contactUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = contactUs
        fields = '__all__'