from pyexpat import model
from django.utils import timezone
from django.db import models
from django.contrib.auth.models import User
from checkboxpost.models import HouseData

class requestData(models.Model):
    user_id= models.ForeignKey(User, on_delete=models.CASCADE)
    fromEmail = models.CharField(max_length=100, null=True)
    HouseData_id = models.ForeignKey(HouseData, on_delete=models.CASCADE,related_name='receivedHouse', null=True)
    swapin = models.CharField(max_length=10)
    swapout = models.CharField(max_length=10)
    explain = models.TextField()
    class Status(models.IntegerChoices):
        Undecided = 0
        Accepted = 1
        Rejected = 2
    status = models.IntegerField(choices=Status.choices, null=True)
    fromHouse_id = models.ForeignKey(HouseData, on_delete=models.CASCADE,related_name='requestHouse',null=True)
    date=models.DateTimeField(default=timezone.now)

    def __str__(self):
            return self.explain
