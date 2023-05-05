from django.urls import path, re_path
from . import views

urlpatterns = [
    path("", views.user_index, name="user-index"),
    path("new-account/", views.create_user, name="new-user-index"),
]
