from django.contrib.auth.views import LoginView, LogoutView
from django.urls import path, re_path
from . import views

urlpatterns = [
    path("login", LoginView.as_view(template_name="user/user_login.html"), name='login'),
    path("new-account/", views.create_user, name="new-account"),
    path("user-profile/", views.user_profile, name="user-profile"),
    path("logout", LogoutView.as_view(next_page='login'), name='logout')
]
