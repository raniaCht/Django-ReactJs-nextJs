from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions, status
from .models import ServiceOwner
from .serializers import ServiceOwnerSerializer, ServiceOwnerUpdateInfoSerializer, ServiceOwnerUpdatePhotoSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
import base64
from uuid import uuid4
from django.core.files.base import ContentFile
from django.shortcuts import get_object_or_404
from django.http import QueryDict

class ServiceOwnerListView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = ServiceOwner.objects.all()
    serializer_class = ServiceOwnerSerializer
    pagination_class = None

class ServiceOwnerView(RetrieveAPIView):
    queryset = ServiceOwner.objects.all()
    serializer_class = ServiceOwnerSerializer
    lookup_field = 'account__id'

    def get_object(self):
        queryset = self.get_queryset()
        obj = get_object_or_404(queryset, account=self.request.user)
        return obj

    # def get_object(self):
    #     return self.queryset.get(account__id=self.kwargs.get('id')).first()

class ServiceOwnerCreateView(APIView):
    def base64_to_image(self, base64_string):
        format, imgstr = base64_string.split(';base64,')
        ext = format.split('/')[-1]
        return ContentFile(base64.b64decode(imgstr), name=uuid4().hex + "." + ext)

    def post(self, request):
        try:
            user = request.user
            if ServiceOwner.objects.filter(account=user).exists():
                return Response({'error': 'you\'re a service owner already'},
                    status=status.HTTP_400_BAD_REQUEST
                )
            else:
                data = request.data
                image_data = data['photo']
                name = data['name']
                photo = self.base64_to_image(image_data)
                description = data['description']
                phone = data['phone']
                email = data['email']
                account = user
                serviceOwner = ServiceOwner.objects.create(name=name, photo=photo, description=description, phone=phone, email=email, account=account)
                serviceOwner.save()
                if ServiceOwner.objects.filter(account=account).exists():
                    return Response(
                        {'success' : 'Service owner created successfully'},
                        status=status.HTTP_201_CREATED
                    )
                else:
                    return Response(
                        {'error': 'Something went wrong when trying to create service owner'},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR
                    )
        except:
            return Response(
                {'error': 'Something went wrong when trying to register as a service owner'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class ServiceOwnerUpdateInfo(APIView):
    def put(self, request):
        try:
            owner = ServiceOwner.objects.get(account=self.request.user)
        except owner.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if self.request.method == "PUT":
            print(request.data['name'])
            serializer = ServiceOwnerUpdateInfoSerializer(owner, data=self.request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(
                            {'success' : 'Service owner update successfully'},
                            status=status.HTTP_200_OK
                        )
            else:
                print(serializer.errors)
                return Response(
                            serializer.errors,
                            status=status.HTTP_400_BAD_REQUEST
                        )


class ServiceOwnerUpdatePhoto(APIView):
    def put(self, request):
        pass