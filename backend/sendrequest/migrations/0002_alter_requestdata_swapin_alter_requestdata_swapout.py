# Generated by Django 4.0.2 on 2022-03-19 14:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sendrequest', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='requestdata',
            name='swapin',
            field=models.CharField(max_length=10),
        ),
        migrations.AlterField(
            model_name='requestdata',
            name='swapout',
            field=models.CharField(max_length=10),
        ),
    ]
