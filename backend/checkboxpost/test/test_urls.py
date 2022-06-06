from django.urls import reverse,resolve
from django.test import SimpleTestCase
from checkboxpost.views import HouseList, HouseListDetail  
from checkboxpost.models import HouseData
from django.utils import timezone


class TestAPIUrls(SimpleTestCase):       


    #tests houseList view has a correctly resolved url
    def test_houseList_url(self):
        #assert 1 == 1
        url = reverse('houseData')
        self.assertEquals(resolve(url).func.view_class, HouseList)

    
    #tests that the url has the correct address with a given argument
    def test_detail_view_args_url(self):
        url = reverse('post_list', args=[1])
        self.assertEqual(url, '/api/1/')

    #test house detail url connects to the correct url
    def test_detail_view_resolves(self):
       url = ('/api/1/')
       self.assertEqual(resolve(url).func.view_class, HouseListDetail)
    