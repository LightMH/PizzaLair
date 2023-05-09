# Generated by Django 4.2 on 2023-05-07 15:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0005_alter_customeraccount_phone_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customeraccount',
            name='phone_number',
            field=models.CharField(blank=True, max_length=8),
        ),
        migrations.AlterField(
            model_name='customeraccount',
            name='profile_image',
            field=models.ImageField(blank=True, default='/static/images/profile_icon.png', upload_to=''),
        ),
    ]