from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def cart_index(request):
    return render(request, 'cart/cart.html')

def checkout_index(request):
    return render(request, 'cart/checkout_process.html')