from django.db import models

# Create your models here.


class Order(models.Model):
    pizza = models.CharField(max_length=140)
    price = models.FloatField(blank=True)


class PaymentInformation(models.Model):
    payment_method = models.CharField(max_length=140)


