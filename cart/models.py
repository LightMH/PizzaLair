from django.db import models
from user.models import CustomerAccount, ContactInformation
from offer.models import Offers
# Create your models here.


class PaymentInformation(models.Model):
    payment_method = models.CharField(max_length=140, blank=True)


class Order(models.Model):
    price = models.FloatField(blank=True)
    customerAccount = models.ForeignKey(CustomerAccount, on_delete=models.CASCADE, blank=True)
    contactInformation = models.ForeignKey(ContactInformation, on_delete=models.CASCADE, blank=True)
    payment = models.ForeignKey(PaymentInformation, on_delete=models.CASCADE, blank=True)
    offer = models.ManyToManyField(Offers, blank=True)

