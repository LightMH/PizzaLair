from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.


def cart_index(request):
    return render(request, 'cart/cart.html')



@login_required
def checkout_index(request):
    return render(request, 'cart/checkout_process.html')


def confirmation_index(request):
    return render(request, 'cart/confirmation.html')

