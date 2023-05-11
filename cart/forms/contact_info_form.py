from django.forms import ModelForm, widgets, SelectMultiple, Select, CharField
from user.models import ContactInformation

COUNTRY_CHOICES = [
    ('Iceland', 'Ísland'),
    ('Norway', 'Noregur'),
    ('Sweden', 'Svíþjóð'),
]


class ContactCreateForm(ModelForm):
    class Meta:
        model = ContactInformation
        exclude = []
        widgets = {
            'full name': widgets.TextInput(attrs={'class': 'form-control'}),
            'street name': widgets.TextInput(attrs={'class': 'form-control'}),
            'house number': widgets.NumberInput(attrs={'class': 'form-control'}),

            'city': widgets.TextInput(attrs={'class': 'form-control'}),
            'postal code': widgets.TextInput(attrs={'class': 'form-control'}),
            "country": widgets.Select(attrs={'class': 'form-control dropDown'},
                                      choices=COUNTRY_CHOICES)
        }
