from django.shortcuts import render, redirect
from django.http import HttpResponse
from user.models import CustomerAccount


# Create your views here.


def user_index(request):
    return render(request, 'user/user.html')


def new_user_index(request):
    return render(request, 'user/new_account.html')


def create_user(request):
    if request.method == 'POST':
        data = request.POST
        CustomerAccount(username=data['username'],
                        password=data['password'],
                        phone_number=data['phoneNumber'],
                        profile_image=data['profileImg'],
                        admin=False
                        ).save()
        return redirect('user-index')
    return render(request, 'user/new_account.html')
