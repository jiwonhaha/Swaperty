
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('checkboxpost', '0008_checkboxdata'),
    ]

    operations = [
        migrations.DeleteModel(
            name='CheckBoxData',
        ),
    ]
