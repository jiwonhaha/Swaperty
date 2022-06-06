from django.test import TestCase

from sendrequest.models import requestData

class requestDataModelTest (TestCase):
    
    @classmethod
    def setUpTestData(cls):
        requestData.objects.create(user_id='home', swapin = '12.03.2022', swapout = '13.03.2022', explain= 'asasdd')

    def test_user_id_label(self):
         houseData = requestData.objects.get(id=1)
         field_label = houseData._meta.get_field('user_id').verbose_name
         self.assertEquals(field_label, 'user id')

    def test_swapin_label(self):
        houseData=requestData.objects.get(id=1)
        field_label = houseData._meta.get_field('swapin').verbose_name
        self.assertEquals(field_label, 'swapin')

    def test_swapout_label(self):
        houseData= requestData.objects.get(id=1)
        field_label = houseData._meta.get_field('swapout').verbose_name
        self.assertEquals(field_label, 'swapout')

    def test_explain_label(self):
        houseData=requestData.objects.get(id=1)
        field_label = houseData._meta.get_field('explain').verbose_name
        self.assertEquals(field_label, 'explain')

    def test_userid_length(self):
        author = requestData.objects.get(id=1)
        max_length = author._meta.get_field('user_id').max_length
        self.assertEquals(max_length, 255)

    def test_swapin_length(self):
        author = requestData.objects.get(id=1)
        max_length = author._meta.get_field('swapin').max_length
        self.assertEquals(max_length, 10) 

    def test_swapout_length(self):
        author = requestData.objects.get(id=1)
        max_length = author._meta.get_field('swapout').max_length
        self.assertEquals(max_length, 10) 
        
