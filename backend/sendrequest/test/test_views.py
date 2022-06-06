from django.urls import reverse
from django.test import TestCase
from django.utils import timezone
from sendrequest.models import requestData

class requestListViewTest (TestCase):

    @classmethod
    def setUpTestData(cls):
        number_of_requestDatas = 13

        for requestData_id in range(number_of_requestDatas):
            requestData.objects.create(
                user_id=f'Christian {requestData_id}',
                swapin = f'swapIn {requestData_id}',
                swapout = f'swapOut {requestData_id}',
                explain = f'explain {requestData_id}',
            )

    def test_view_url_exists_at_desired_location(self):
        response = self.client.get('/request/')
        self.assertEqual(response.status_code, 200)


    def test_view_url_accessible_by_name(self):
        response = self.client.get(reverse('requestData'))
        self.assertEqual(response.status_code, 200)