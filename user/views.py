from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def user_index(request):
    return render(request, 'user/user.html')


def new_user_index(request):
    return render(request, 'user/new_account.html')
