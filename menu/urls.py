from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="menu-index"),
    path('details/', views.details_index, name="details-index")
]
