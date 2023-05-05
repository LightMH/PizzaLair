from django.db import models
from cart.models import Order
from offer.models import Offers


# Create your models here.


class Toppings(models.Model):
    name = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.name


class Pizza(models.Model):
    name = models.CharField(max_length=255, blank=True)
    toppings = models.ManyToManyField(Toppings)
    description = models.CharField(max_length=255, blank=True)
    type = models.CharField(max_length=255, blank=True)
    image = models.CharField(max_length=9999, blank=True)
    order = models.ManyToManyField(Order, blank=True)
    offer = models.ManyToManyField(Offers, blank=True)
    price = models.FloatField(blank=True)

    def __str__(self):
        return self.name

# class Details(models.Model):
# description = models.CharField(max_length=255, blank=True)
# pizza = models.OneToOneField(Pizza, on_delete=models.CASCADE)
