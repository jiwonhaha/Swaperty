from django.urls import reverse,resolve
from django.test import SimpleTestCase
from sendrequest.views import requestListView  
from sendrequest.models import requestData
from django.utils import timezone


class TestAPIUrls(SimpleTestCase):       


    #tests houseList view has a correctly resolved url
    def test_houseList_url(self):
        #assert 1 == 1
        url = reverse('requestData')
        self.assertEquals(resolve(url).func.view_class, requestListView)
    