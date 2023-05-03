from django.db import models
from cart.models import Order
from offer.models import Offers
# Create your models here.


class Toppings(models.Model):
    name = models.CharField(max_length=255, blank=True)


class Pizza(models.Model):
    name = models.CharField(max_length=255, blank=True)
    size = models.CharField(max_length=255, blank=True)
    toppings = models.ManyToManyField(Toppings)
    type = models.CharField(max_length=255, blank=True)
    image = models.CharField(max_length=9999, blank=True)
    order = models.ManyToManyField(Order, blank=True)
    offer = models.ManyToManyField(Offers, blank=True)

    def __str__(self):
        return self.name


class Details(models.Model):
    description = models.CharField(max_length=255, blank=True)
    pizza = models.OneToOneField(Pizza, on_delete=models.CASCADE)

