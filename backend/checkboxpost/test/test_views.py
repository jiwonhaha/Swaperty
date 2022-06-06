from django.urls import reverse
from django.test import TestCase
from django.utils import timezone

from checkboxpost.models import HouseData

class HouseListViewTest (TestCase):

    @classmethod
    def setUpTestData(cls):
        number_of_HouseDatas = 13

        for HouseData_id in range(number_of_HouseDatas):
            HouseData.objects.create(
                user_id=f'Christian {HouseData_id}',
                title=f'title {HouseData_id}',
                address = f'Address {HouseData_id}',
                description = f'description {HouseData_id}',
                swapIn = f'swapIn {HouseData_id}',
                swapOut = f'swapOut {HouseData_id}'
            )

    def test_view_url_exists_at_desired_location(self):
        response = self.client.get('/api/')
        self.assertEqual(response.status_code, 200)

    def test_view_url_accessible_by_name(self):
        response = self.client.get(reverse('houseData'))
        self.assertEqual(response.status_code, 200)