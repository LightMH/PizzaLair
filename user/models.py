from django.db import models

# Create your models here.


class CustomerAccount(models.Model):
    username = models.CharField(max_length=255, blank=True)
    password = models.CharField(max_length=255, blank=True)
    admin = models.BooleanField(blank=True)


class ContactInformation(models.Model):
    full_name = models.CharField(max_length=255, blank=True)
    phone = models.CharField(max_length=20, blank=True)
    city = models.CharField(max_length=255, blank=True)
    country = models.CharField(max_length=255, blank=True)
    postal_code = models.CharField(max_length=20, blank=True)
