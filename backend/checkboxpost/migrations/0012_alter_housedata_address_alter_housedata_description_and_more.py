# Generated by Django 4.0.2 on 2022-04-30 19:24

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('checkboxpost', '0011_housedata_email_housedata_request'),
    ]

    operations = [
        migrations.AlterField(
            model_name='housedata',
            name='address',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='housedata',
            name='description',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='housedata',
            name='title',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='housedata',
            name='user_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]