from django.shortcuts import render, get_object_or_404
import database_talker as db_talker
from menu.models import Pizza
from django.http import JsonResponse


# Create your views here.


def index(request):
    if 'search_filter' in request.GET:
        search_filter = request.GET['search_filter']
        pizzas = [{
            'id': x.id,
            'name': x.name,
            'image': x.image,
            'type': x.type,
            'description': x.description
        } for x in Pizza.objects.filter(name__icontains=search_filter)]
        return JsonResponse({'data': pizzas})
    pizza_list = db_talker.get_all_pizzas().order_by('name')
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
