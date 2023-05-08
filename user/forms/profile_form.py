from django.forms import ModelForm, widgets
from user.models import CustomerAccount


class ProfileForm(ModelForm):
    class Meta:
        model = CustomerAccount
        exclude = ['id', 'user', 'admin']
        widgets = {
            'profile_image': widgets.TextInput(attrs={'class': 'form-control'})
        }
