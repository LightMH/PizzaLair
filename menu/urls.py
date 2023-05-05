from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.index, name="menu-index"),
    path('<int:id>', views.id_index, name="id-index")
]

