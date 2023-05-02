from django.urls import path
from . import views

urlpatterns = [
    path('', views.user_index, name="user-index"),
    path('', views.new_user_index, name="new_user-index"),
]
