from re import template
from django.test import TestCase

from checkboxpost.models import HouseData


class HouseDataModelTest (TestCase):

    @classmethod
    def setUpTestData(cls):
        HouseData.objects.create(user_id='home', title='home house', address='ads', image = 'template/kims.png', description= 'asasdd', swapIn = '12.03.2022', swapOut = '13.03.2022')

    def test_user_id_label(self):
         houseData = HouseData.objects.get(id=1)
         field_label = houseData._meta.get_field('user_id').verbose_name
         self.assertEquals(field_label, 'user id')

    def test_title_label(self):
        houseData=HouseData.objects.get(id=1)
        field_label = houseData._meta.get_field('title').verbose_name
        self.assertEquals(field_label, 'title')

    def test_address_label(self):
        houseData=HouseData.objects.get(id=1)
        field_label = houseData._meta.get_field('address').verbose_name
        self.assertEquals(field_label, 'address')

    def test_address_label(self):
        houseData=HouseData.objects.get(id=1)
        field_label = houseData._meta.get_field('image').verbose_name
        self.assertEquals(field_label, 'image')

    def test_description_label(self):
        houseData=HouseData.objects.get(id=1)
        field_label = houseData._meta.get_field('description').verbose_name
        self.assertEquals(field_label, 'description')

    def test_swapIn_label(self):
        houseData=HouseData.objects.get(id=1)
        field_label = houseData._meta.get_field('swapIn').verbose_name
        self.assertEquals(field_label, 'swapIn')

    def test_swapOut_label(self):
        houseData=HouseData.objects.get(id=1)
        field_label = houseData._meta.get_field('swapOut').verbose_name
        self.assertEquals(field_label, 'swapOut')


    def test_userid_length(self):
        houseData = HouseData.objects.get(id=1)
        max_length = houseData._meta.get_field('user_id').max_length
        self.assertEquals(max_length, 255)

    def test_title_length(self):
        houseData = HouseData.objects.get(id=1)
        max_length = houseData._meta.get_field('title').max_length
        self.assertEquals(max_length, 255) 

    def test_address_length(self):
        houseData = HouseData.objects.get(id=1)
        max_length = houseData._meta.get_field('address').max_length
        self.assertEquals(max_length, 255) 


    def test_swapIn_length(self):
        houseData = HouseData.objects.get(id=1)
        max_length = houseData._meta.get_field('swapIn').max_length
        self.assertEquals(max_length, 10) 

    def test_swapOut_length(self):
        houseData = HouseData.objects.get(id=1)
        max_length = houseData._meta.get_field('swapOut').max_length
        self.assertEquals(max_length, 10) 
