from django.db import models
from django.contrib.auth.models import User as AuthUser


# Create your models here.


class CustomerAccount(models.Model):
    user = models.OneToOneField(AuthUser, on_delete=models.CASCADE)
    username = models.CharField(max_length=255, blank=True)
    phone_number = models.CharField(max_length=8, blank=True)
    profile_image = models.ImageField(max_length=9999, blank=True,
                                      default="/static/images/profile_icon.png")  # ok þetta er ekki beint að virka
    admin = models.BooleanField(blank=True)


class ContactInformation(models.Model):
    full_name = models.CharField(max_length=255, blank=True)
    phone = models.CharField(max_length=20, blank=True)
    city = models.CharField(max_length=255, blank=True)
    country = models.CharField(max_length=255, blank=True)
    postal_code = models.CharField(max_length=20, blank=True)
