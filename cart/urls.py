from django.urls import path
from . import views

urlpatterns = [
    path('', views.cart_index, name="cart-index"),
    path('confirmation', views.confirmation_index, name='confirmation-index'),
    path('final-page', views.final_index, name='final-index'),
    path('payment', views.payment_index, name='payment-index'),
    path('contact_information', views.contact_information, name='contact_information')
    # er að nota þetta contact_information!
]
