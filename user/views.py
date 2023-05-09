from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.http import HttpResponse
from user.models import CustomerAccount
from user.forms.profile_form import ProfileForm


# Create your views here.


def user_login(request):
    return render(request, 'user/user_login.html')


def new_user_index(request):
    return render(request, 'user/new_account.html')


def user_profile(request):
    profile = CustomerAccount.objects.filter(user=request.user).first()
    if request.method == 'POST':
        form = ProfileForm(instance=profile, data=request.POST)
        if form.is_valid():
            profile = form.save(commit=False)
            profile.user = request.user
            profile.save()
            return redirect('user-profile')

    return render(request, 'user/user_profile.html', {
        'form': ProfileForm(instance=profile)
    })


def create_user(request):
    error_string = ""
    if request.method == 'POST':
        form = UserCreationForm(data=request.POST)
        if form.is_valid():
            form.save()
            CustomerAccount(user=form.instance,
                            username=request.POST['username'],
                            phone_number=request.POST['phoneNumber'],
                            profile_image=request.POST['profileImg'],
                            admin=False
                            ).save()
            return redirect('login')
        else:
            error_string = form.errors
    return render(request, 'user/new_account.html', {
        'form': UserCreationForm(),
        'error': error_string
    })
