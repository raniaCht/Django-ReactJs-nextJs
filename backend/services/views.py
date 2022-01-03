from django.shortcuts import render
from .models import Service
from serviceowners.models import ServiceOwner
from .serializers import ServiceSerializer, ServiceDetailSerializer
from rest_framework.views import APIView
from serviceowners.models import ServiceOwner
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions, status
from rest_framework.response import Response
import base64
from uuid import uuid4
from django.core.files.base import ContentFile

class ServiceOwnerCreateView(APIView):
    def base64_to_image(self, base64_string):
        if (base64_string is None):
            return None
        else:
            format, imgstr = base64_string.split(';base64,')
            ext = format.split('/')[-1]
            return ContentFile(base64.b64decode(imgstr), name=uuid4().hex + "." + ext)

    def post(self, request):
        try:
            if ServiceOwner.objects.filter(account=request.user).exists():
                owner = ServiceOwner.objects.get(account=request.user)
                data = request.data
                image_data = data['photo_main']
                photo_main = self.base64_to_image(image_data)
                title = data['title']
                description = data['description']
                price = data['price'] 
                wilaya = data['wilaya']
                unit_price = data['unit_price']
                category = data['category']
                photo_1 = self.base64_to_image(request.POST.get('photo_1', None)) 
                photo_2 = self.base64_to_image(request.POST.get('photo_2', None))
                photo_3 = self.base64_to_image(request.POST.get('photo_3', None))
                photo_4 = self.base64_to_image(request.POST.get('photo_4', None))
                photo_5 = self.base64_to_image(request.POST.get('photo_5', None))
                photo_6 = self.base64_to_image(request.POST.get('photo_6', None))
                photo_7 = self.base64_to_image(request.POST.get('photo_7', None))
                photo_8 = self.base64_to_image(request.POST.get('photo_8', None))
                photo_9 = self.base64_to_image(request.POST.get('photo_9', None))
                photo_10 = self.base64_to_image(request.POST.get('photo_10', None))
                photo_11 = self.base64_to_image(request.POST.get('photo_11', None))
                photo_12 = self.base64_to_image(request.POST.get('photo_12', None))
                photo_13 = self.base64_to_image(request.POST.get('photo_13', None))
                photo_14 = self.base64_to_image(request.POST.get('photo_14', None))
                photo_15 = self.base64_to_image(request.POST.get('photo_15', None))
                photo_16 = self.base64_to_image(request.POST.get('photo_16', None))
                photo_17 = self.base64_to_image(request.POST.get('photo_17', None))
                photo_18 = self.base64_to_image(request.POST.get('photo_18', None))
                photo_19 = self.base64_to_image(request.POST.get('photo_19', None))
                photo_20 = self.base64_to_image(request.POST.get('photo_20', None))
                service = Service.objects.create(
                    title=title, wilaya=wilaya, photo_main=photo_main, description=description, price=price, 
                    unit_price=unit_price, category=category, owner=owner, photo_1=photo_1, 
                    photo_2=photo_2, photo_3=photo_3, photo_4=photo_4, photo_5=photo_5,
                    photo_6=photo_6, photo_7=photo_7, photo_8=photo_8, photo_9=photo_9,
                    photo_10=photo_10, photo_11=photo_11, photo_12=photo_12, photo_13=photo_13,
                    photo_14=photo_14, photo_15=photo_15, photo_16=photo_16, photo_17=photo_17,
                    photo_18=photo_18, photo_19=photo_19, photo_20=photo_20,
                )
                service.save()

                if Service.objects.filter(id=service.id).exists():
                    return Response(
                        {'success' : 'Service created successfully'},
                        status=status.HTTP_201_CREATED
                    )
                else:
                    return Response(
                        {'error': 'Something went wrong when trying to create a service'},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR
                    )
            else:
                return Response({'error': 'you aren\'t a service owner'},
                    status=status.HTTP_404_NOT_FOUND
                )
        except Exception as e:
            return Response(
                {'error': 'Something went wrong when trying to create a service'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class ServicesView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    lookup_field = 'slug'

class ServiceView(RetrieveAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceDetailSerializer
    lookup_field = 'slug'

class SearchView(APIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = ServiceSerializer

    def get(self, request):
        queryset = Service.objects.all()
        data = self.request
        search = data.GET.get('search', None)
        location = data.GET.get('location', None)
        category = data.GET.get('type', None)
        if (search):
            queryset = queryset.filter(title__icontains=search)
        if (location):
            queryset = queryset.filter(wilaya__iexact=location)
        if (category):
            queryset = queryset.filter(category__iexact=category)
        serializer = ServiceSerializer(queryset, many=True)

        return Response(serializer.data)

class MyServices(APIView):
    serializer_class = ServiceSerializer

    def get(self, request):
        owner = ServiceOwner.objects.get(account=self.request.user)
        queryset = Service.objects.filter(owner=owner)
        serializer = ServiceSerializer(queryset, many=True)

        return Response(serializer.data)

    def delete(self, request):
        try:
            print("self.request.data['id']",self.request.data['id'])
            Service.objects.get(id=self.request.data['id']).delete()
            return Response(
                {'success' : 'the service has been delete'},
                status= status.HTTP_200_OK
            )
        except Exception as e:
            print(e)
            return Response(
                {'success': 'something went wrong when trying to delete a service'},
                status= status.HTTP_500_INTERNAL_SERVER_ERROR
            )