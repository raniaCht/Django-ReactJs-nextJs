from django.urls import path
from .views import ServiceOwnerCreateView

urlpatterns = [
    path('new/', ServiceOwnerCreateView.as_view()),
    # path('', ListingsView.as_view()),
    # path('search', SearchView.as_view()),
    # path('<slug>', ListingView.as_view()),
]