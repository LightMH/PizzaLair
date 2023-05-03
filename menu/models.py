from django.db import models

# Create your models here.


class Pizza(models.Model):
    name = models.CharField(max_length=140)
    size = models.CharField(max_length=140, blank=True)
    toppings = models.CharField(max_length=140, blank=True)


class Details(models.Model):
    description = models.CharField(max_length=255)





