from rest_framework import serializers
from .models import Service

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ('title', 'price', 'description', 'wilaya', 'unit_price', 'category', 'photo_main', 'slug', 'id')

class ServiceDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'
        lookup_field = 'slug'

class ServiceUpdateInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ('title', 'price', 'description', 'wilaya', 'unit_price', 'category', )