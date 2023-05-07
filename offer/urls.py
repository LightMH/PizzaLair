from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="offer-index"),
    path('<int:id>', views.single_index, name="single-index")
]
