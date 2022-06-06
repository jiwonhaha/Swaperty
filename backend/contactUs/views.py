
from email.mime import image
from django.shortcuts import render, redirect
from django.http import Http404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import contactUsSerializer
from .models import contactUs






class contactUsView(APIView):


	def get(self,request):
		houselist = contactUs.objects.all()
		serializer = contactUsSerializer(houselist,many=True)
		return Response(serializer.data)

	def post(self,request):
		serializer= contactUsSerializer(data = request.data)
		# serializer.image = request.FILES.get('image')
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)