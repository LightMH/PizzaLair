from django.urls import path
from . import views

urlpatterns = [
    path('', views.cart_index, name="cart-index"),
    path('checkout', views.checkout_index, name='checkout-index')
]
