
from django.shortcuts import render, redirect
from django.http import Http404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import  requestDataSerializer
from .models import requestData


class requestListView(APIView):

    def get(self,request):
        requestlist = requestData.objects.all()
        serializer = requestDataSerializer(requestlist,many=True)
        return Response(serializer.data)

    def post(self,request):
        serializer = requestDataSerializer(data= request.data)
        if serializer.is_valid() :
             serializer.save()
             return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class requestListHouseIDDetailView (APIView):
	def get_object(self, pk):
		try: 
			return requestData.objects.filter(HouseData_id=pk)
		except requestData.DoesNotExist:
			return Http404

	def get(self,request, pk, format=None):
		houselist = self.get_object(pk)
		serializer = requestDataSerializer(houselist,many=True)
		return Response(serializer.data)

	def put(self,request, pk, format=None):
		houselist = self.get_object(pk)
		serializer = requestDataSerializer(houselist, data =request.data, many=True)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	def delete(self,request, pk, format=None):
		houselist = self.get_object(pk)
		houselist.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)

class requestListuserIDDetailView (APIView):
	def get_object(self, pk):
		try: 
			return requestData.objects.filter(user_id=pk)
		except requestData.DoesNotExist:
			return Http404

	def get(self,request, pk, format=None):
		houselist = self.get_object(pk)
		serializer = requestDataSerializer(houselist, many=True)
		return Response(serializer.data)

	def put(self,request, pk, format=None):
		houselist = self.get_object(pk)
		serializer = requestDataSerializer(houselist, data =request.data, many=True)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


	def delete(self,request, pk, format=None):
		houselist = self.get_object(pk)
		houselist.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)



class requestDetailView (APIView):
	def get_object(self, pk):
		try: 
			return requestData.objects.get(pk=pk)
		except requestData.DoesNotExist:
			return Http404

	def get(self,request, pk, format=None):
		houselist = self.get_object(pk)
		serializer = requestDataSerializer(houselist)
		return Response(serializer.data)

	def put(self,request, pk, format=None):
		houselist = self.get_object(pk)
		serializer = requestDataSerializer(houselist, data =request.data,)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	def delete(self,request, pk, format=None):
		houselist = self.get_object(pk)
		houselist.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)