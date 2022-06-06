from unicodedata import name
from django.conf.urls.static import static
from django.urls import path
from .views import loginAPIView

urlpatterns = [
    path('user/',loginAPIView.as_view(), name='register'),
]
