
from rest_framework import generics
from rest_framework import serializers
from rest_framework import status
from rest_framework.views import APIView
from .serializers import UserSerializer
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.http import Http404

class loginAPIView(generics.GenericAPIView):
    serializer_class = UserSerializer

    def post(self, request):
        serializer = self.get_serializer(data = request.data)
        if serializer.is_valid():
            serializer.save()

            return Response({
                "Message": "User created sucessfully",
                "User" : serializer.data}, status = status.HTTP_201_CREATED
                )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


