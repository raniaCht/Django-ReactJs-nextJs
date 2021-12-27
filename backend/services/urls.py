from django.urls import path
from .views import ServiceOwnerCreateView, ServicesView, ServiceView, SearchView

urlpatterns = [
    path('new/', ServiceOwnerCreateView.as_view()),
    path('', ServicesView.as_view()),
    path('search', SearchView.as_view()),
    path('<slug>', ServiceView.as_view()),
]