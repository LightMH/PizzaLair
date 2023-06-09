from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect

from cart.forms.contact_info_form import ContactCreateForm
from cart.forms.payment_form import PaymentForm
from django.http import HttpResponse

from cart.forms.contact_info_form import ContactCreateForm


# Create your views here.


def cart_index(request):
    return render(request, 'cart/cart.html')



def confirmation_index(request):
    return render(request, 'cart/confirmation.html')


@login_required
def final_index(request):
    return render(request, 'cart/final-page.html')


@login_required
def payment_index(request):
    if request.method == 'POST':
        form = PaymentForm(data=request.POST)
        print(form)
        if form.is_valid():
            return redirect('confirmation-index')
    else:
        form = PaymentForm()
    return render(request, 'cart/payment.html', {"form": form})


@login_required
def contact_information(request):
    if request.method == 'POST':
        form = ContactCreateForm(data=request.POST)
        if form.is_valid():
            contact_info = form.save()
            return redirect('payment-index')
    else:
        form = ContactCreateForm()
    return render(request, 'cart/contact_information.html', {
        'form': form})
