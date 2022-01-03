from rest_framework import serializers
from .models import ServiceOwner

class ServiceOwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceOwner
        fields = '__all__'

class ServiceOwnerUpdateInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceOwner
        exclude = ('account', 'photo', )

class ServiceOwnerUpdatePhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceOwner
        fields = ('photo', )