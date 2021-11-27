from django.urls import path
from .views import ServiceOwnerListView, ServiceOwnerView, ServiceOwnerCreateView


urlpatterns = [
    path('', ServiceOwnerListView.as_view()),
    path('me/', ServiceOwnerView.as_view()),
    path('register/', ServiceOwnerCreateView.as_view()),
]