from django.urls import path
from .views import ServiceOwnerListView, ServiceOwnerView, ServiceOwnerCreateView, ServiceOwnerUpdateInfo, ServiceOwnerUpdatePhoto


urlpatterns = [
    path('', ServiceOwnerListView.as_view()),
    path('me/', ServiceOwnerView.as_view()),
    path('register/', ServiceOwnerCreateView.as_view()),
    path('update-info/', ServiceOwnerUpdateInfo.as_view()),
    path('update-photo/', ServiceOwnerUpdatePhoto.as_view()),
]