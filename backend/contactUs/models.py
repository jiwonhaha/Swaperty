from django.db import models

class contactUs(models.Model):
    user_id = models.CharField(max_length=255)
    title= models.CharField(max_length=255)
    description= models.TextField()
