
from email.mime import image
from django.shortcuts import render, redirect
from django.http import Http404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import HouseDataSerializer
from .models import HouseData






class HouseList(APIView):


	def get(self,request):
		houselist = HouseData.objects.all()
		serializer = HouseDataSerializer(houselist,many=True)
		return Response(serializer.data)

	def post(self,request):
		serializer= HouseDataSerializer(data = request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class HouseimageList(APIView):
# 	def get(self,request):
# 		houselist = HouseDataImage.objects.all()
# 		serializer = HouseDataImageSerializer(houselist,many=True)
# 		return Response(serializer.data)

# 	def post(self,request):
# 		serializer= HouseDataImageSerializer(data = request.data)
# 		if serializer.is_valid():
# 			serializer.save()
# 			return Response(serializer.data, status=status.HTTP_201_CREATED)
# 		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

		
# class HouseimageListDetail (APIView):
# 	def get_object(self, pk):
# 		try: 
# 			return HouseDataImage.objects.filter(HouseData_id=pk)
# 		except HouseDataImage.DoesNotExist:
# 			return Http404

# 	def get(self,request, pk, format=None):
# 		houseimagelist = self.get_object(pk)
# 		serializer = HouseDataImageSerializer(houseimagelist, many=True)
# 		return Response(serializer.data)

# 	def put(self,request, pk, format=None):
# 		houseimagelist = self.get_object(pk)
# 		serializer = HouseDataImageSerializer(houseimagelist, data =request.data,many=True)
# 		if serializer.is_valid():
# 			serializer.save()
# 			return Response(serializer.data, status=status.HTTP_201_CREATED)
# 		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# 	def delete(self,request, pk, format=None):
# 		houseimagelist = self.get_object(pk)
# 		houseimagelist.delete()
# 		return Response(status=status.HTTP_204_NO_CONTENT)



class HouseListDetail (APIView):
	def get_object(self, pk):
		try: 
			return HouseData.objects.get(pk=pk)
		except HouseData.DoesNotExist:
			return Http404

	def get(self,request, pk, format=None):
		houselist = self.get_object(pk)
		serializer = HouseDataSerializer(houselist)
		return Response(serializer.data)

	def put(self,request, pk, format=None):
		houselist = self.get_object(pk)
		serializer = HouseDataSerializer(houselist, data =request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	def delete(self,request, pk, format=None):
		houselist = self.get_object(pk)
		houselist.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)

class HouseListDetailUid (APIView):
	def get_object(self, pk):
		try: 
			return HouseData.objects.filter(user_id=pk)
		except HouseData.DoesNotExist:
			return Http404

	def get(self,request, pk, format=None):
		houselist = self.get_object(pk)
		serializer = HouseDataSerializer(houselist, many=True)
		return Response(serializer.data)

	def put(self,request, pk, format=None):
		houselist = self.get_object(pk)
		serializer = HouseDataSerializer(houselist, data =request.data, many=True)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	def delete(self,request, pk, format=None):
		houselist = self.get_object(pk)
		houselist.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)

	
class HouseSearch (APIView):
	def get_object(self, pk):
		try: 
			return HouseData.objects.filter(province__icontains=pk)
		except HouseData.DoesNotExist:
			return Http404

	def get(self,request, pk, format=None):
		houselist = self.get_object(pk)
		serializer = HouseDataSerializer(houselist, many=True)
		return Response(serializer.data)




# 	item_list = HouseData.objects.order_by("-date")
# 	if request.method == "POST":
# 		form = TodoForm(request.POST)
# 		if form.is_valid():
# 			form.save()
# 			return redirect('todo')
# 	form = TodoForm()

# 	page = {
# 			"forms" : form,
# 			"list" : item_list,
# 			"title" : "Property LIST",
# 		}
# 	return render(request, page)



# ### function to remove item, it receive todo item_id as primary key from url ##
# def remove(request, item_id):
# 	item = HouseData.objects.get(id=item_id)
# 	item.delete()
# 	messages.info(request, "item is successfully removed ")
# 	return redirect('todo')