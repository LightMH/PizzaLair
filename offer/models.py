from django.db import models
# Create your models here.


class Offers(models.Model):
    name = models.CharField(max_length=255, blank=True)
    description = models.CharField(max_length=255, blank=True)


