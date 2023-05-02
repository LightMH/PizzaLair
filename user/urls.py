from django.urls import path, re_path
from . import views

urlpatterns = [
    path("", views.user_index, name="user-index"),
    path("new-account/", views.new_user_index, name="new-user-index"),
]
