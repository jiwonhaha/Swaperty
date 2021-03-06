# Generated by Django 4.0.2 on 2022-04-30 18:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('checkboxpost', '0010_delete_housedataimage'),
        ('sendrequest', '0006_requestdata_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='requestdata',
            name='fromHouse_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='requestHouse', to='checkboxpost.housedata'),
        ),
        migrations.AddField(
            model_name='requestdata',
            name='username',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='requestdata',
            name='HouseData_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='receivedHouse', to='checkboxpost.housedata'),
        ),
    ]
