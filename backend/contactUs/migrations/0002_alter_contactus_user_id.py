# Generated by Django 4.0.2 on 2022-04-29 11:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contactUs', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contactus',
            name='user_id',
            field=models.CharField(max_length=255),
        ),
    ]
