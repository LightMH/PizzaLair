# Generated by Django 4.2 on 2023-05-10 18:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0008_alter_customeraccount_profile_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customeraccount',
            name='profile_image',
            field=models.CharField(blank=True, default='https://i.imgur.com/cN6jBlk.png', editable=False, max_length=9999),
        ),
    ]
