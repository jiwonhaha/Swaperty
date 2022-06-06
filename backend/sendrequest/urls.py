from django.contrib import admin
from django.urls import path
from .views import requestListView, requestListHouseIDDetailView, requestListuserIDDetailView, requestDetailView


urlpatterns = [

    path('',requestListView.as_view(), name='requestData'),
    path('userID/<int:pk>/',requestListuserIDDetailView.as_view(), name ='requestUserID'),
    path('houseID/<int:pk>/',requestListHouseIDDetailView.as_view(), name ='requestHouseID'),
    path('<int:pk>/',requestDetailView.as_view(),name='requestDetail'),
]