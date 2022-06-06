
from unicodedata import name
from django.conf.urls.static import static
from django.urls import path
from . import views
from .views import HouseList, HouseListDetail, HouseListDetailUid,HouseSearch

urlpatterns = [
    path('',HouseList.as_view(), name='houseData'),
    # path('image/', HouseimageList.as_view(), name= 'image'),
    path('<int:pk>/',HouseListDetail.as_view(), name='post_list'),
    # path('image/<int:pk>/',HouseimageListDetail.as_view(), name='image_detail'),
    path('uid/<int:pk>/', HouseListDetailUid.as_view(), name='uidDetail'),
    path('province/<str:pk>/',HouseSearch.as_view(), name= 'search'),
]
