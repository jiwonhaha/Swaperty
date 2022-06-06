from django.utils import timezone
from ctypes import addressof
from django.db import models
from django.contrib.auth.models import User

class HouseData(models.Model):
    user_id= models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    title= models.CharField(max_length=255, null=True)
    province = models.CharField(max_length=255,null=True)
    postcode = models.CharField(max_length=255,null=True)
    address= models.CharField(max_length=255, null=True)
    Email = models.CharField(max_length=255, null=True)
    request = models.BooleanField(null=True)
    image= models.ImageField(blank=True, null=True)
    description= models.TextField(null=True)
    swapIn = models.TextField(max_length=10,null=True)
    swapOut = models.TextField(max_length=10,null=True)
    Wifi= models.BooleanField(null = True, blank = True)
    Kitchen= models.BooleanField(null = True, blank = True)
    WashingMachine= models.BooleanField(null = True, blank=True)
    Stove= models.BooleanField(null = True, blank=True)
    Garden= models.BooleanField(null = True, blank=True)
    Hairdryer = models.BooleanField(null = True, blank=True)
    Balcony= models.BooleanField(null = True, blank=True)
    Cctv= models.BooleanField(null = True, blank=True)
    HotWater= models.BooleanField(null = True, blank=True)
    Towel= models.BooleanField(null = True, blank=True)
    Soap= models.BooleanField(null = True, blank=True)
    ToiletPaper= models.BooleanField(null = True, blank=True)
    Hanger= models.BooleanField(null = True, blank=True)
    Iron= models.BooleanField(null = True, blank=True)
    Tv= models.BooleanField(null = True, blank=True)
    SmokeAlarm= models.BooleanField(null = True, blank=True)
    CarbonAlarm= models.BooleanField(null = True, blank=True)
    FireExtinguisher= models.BooleanField(null = True, blank=True)
    FirstAidKit= models.BooleanField(null = True, blank=True)
    Microwave= models.BooleanField(null = True, blank=True)
    Oven= models.BooleanField(null = True, blank=True)
    Workspace= models.BooleanField(null = True, blank=True)
    Fridge= models.BooleanField(null = True, blank=True)
    WheelchairAccess= models.BooleanField(null = True, blank=True)
    Smoke= models.BooleanField(null = True, blank=True)
    Pet= models.BooleanField(null = True, blank=True)
    Party= models.BooleanField(null = True, blank=True)
    date=models.DateTimeField(default=timezone.now)

    def __str__(self):
            return self.title



# class HouseDataImage(models.Model):
#     HouseData_id = models.ForeignKey(HouseData, on_delete=models.CASCADE)
#     image= models.ImageField(blank=True, null=True)

