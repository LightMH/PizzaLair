from django.shortcuts import render, get_object_or_404
from offer.models import Offers
from menu.models import Pizza
from django.http import HttpResponse


# Create your views here.


def index(request):
    offers = Offers.objects.all()
    return render(request, 'offer/offer.html', context={'offers': offers})


def single_index(request, id):
    pizza_list = Pizza.objects.all()
    print(id)
    return render(request, 'offer/single_offer.html', {
        'offer': get_object_or_404(Offers, pk=id),
        'pizzas': pizza_list
    });
