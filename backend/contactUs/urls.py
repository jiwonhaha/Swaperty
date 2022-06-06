
from unicodedata import name
from django.conf.urls.static import static
from django.urls import path
from .views import contactUsView

urlpatterns = [
    path('',contactUsView.as_view(), name='contactUs'),
]