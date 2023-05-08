from django.db import models


# Create your models here.


class Offers(models.Model):
    name = models.CharField(max_length=255, blank=True)
    description = models.CharField(max_length=255, blank=True)
    number_of_pizzas = models.IntegerField(blank=True, default=0)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.range_of_pizzas = self.__get_range_of_pizzas__()

    def __get_range_of_pizzas__(self):
        new_range = []
        for i in range(self.number_of_pizzas):
            new_range.append(i + 1)
        return new_range
