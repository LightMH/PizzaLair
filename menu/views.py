from django.shortcuts import render
import database_talker as db_talker
# Create your views here.


pizzas = [
    {"name": "Margarita", "price": "3590 kr"},
    {"name": "Hawaiian", "price": "3590 kr"}
]

def index(request):
    pizza_list = db_talker.get_all_pizzas()
    return render(request, 'menu/menu.html', context={'pizza_list': pizza_list})


def details_index(request):
    return render(request, 'menu/details.html')