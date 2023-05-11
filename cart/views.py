from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect

from cart.forms.contact_info_form import ContactCreateForm
from cart.forms.payment_form import PaymentForm


# Create your views here.


def cart_index(request):
    return render(request, 'cart/cart.html')


@login_required
def checkout_index(request):
    return render(request, 'cart/checkout_process.html')


def confirmation_index(request):
    return render(request, 'cart/confirmation.html')


def final_index(request):
    return render(request, 'cart/final-page.html')


def payment_index(request):
    if request.method == 'POST':
        form = PaymentForm(request.POST)
        if form.is_valid():
            return redirect('final-index')
    else:
        form = PaymentForm()
    return render(request, 'cart/payment.html', {"form": form})


def contact_information(request):
    if request.method == 'POST':
        form = ContactCreateForm(data=request.POST)
        if form.is_valid():
            contact_info = form.save()
            return redirect('payment-index')
    else:
        form = ContactCreateForm()
    return render(request, 'cart/contact_information.html', {
        'form': form
    })
