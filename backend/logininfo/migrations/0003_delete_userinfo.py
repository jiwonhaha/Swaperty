# Generated by Django 4.0.2 on 2022-04-29 11:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('logininfo', '0002_alter_userinfo_created_by'),
    ]

    operations = [
        migrations.DeleteModel(
            name='userinfo',
        ),
    ]
