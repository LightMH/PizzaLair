from django.shortcuts import render, get_object_or_404
import database_talker as db_talker
from menu.models import Pizza

# Create your views here.


pizzas = [
    {"name": "Margarita", "price": "3590 kr"},
    {"name": "Hawaiian", "price": "3590 kr"}
]


def index(request):
    pizzas = Pizza.objects.all()
    pizza_list = []
    for pizza in pizzas:
        pizza_dict = {
            'pizza': pizza,
            'toppings': pizza.toppings.values_list('name', flat=True)
        }
        pizza_list.append(pizza_dict)
    return render(request, 'menu/menu.html', context={'pizza_list': pizza_list})


def details_index(request):
    return render(request, 'menu/details.html')


# def id_index(request, id):
#   print(id)
#  pizza_id = db_talker.get_pizza_by_id(id)
# return render(request, 'menu/details.html', context={'pizza_id': pizza_id})

def id_index(request, id):
    print(id)
    return render(request, 'menu/details.html', {
        'pizza': get_object_or_404(Pizza, pk=id)
    })
