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
            'full_name': widgets.TextInput(attrs={'class': 'form-control', 'required': True}),
            'street_name': widgets.TextInput(attrs={'class': 'form-control', 'required': True}),
            'house_number': widgets.NumberInput(attrs={'class': 'form-control', 'required': True}),
            'city': widgets.TextInput(attrs={'class': 'form-control', 'required': True}),
            'postal_code': widgets.TextInput(attrs={'class': 'form-control', 'required': True}),
            "country": widgets.Select(attrs={'class': 'form-control dropDown', 'required': True},
                                      choices=COUNTRY_CHOICES)
        }

    def clean_contact_info(self):
        super(ContactCreateForm, self).clean()
        full_name = self.cleaned_data.get('full_name')
        if len(full_name) < 5:
            self._errors['full_name'] = self._error_class([
                'Minnst 10 stafir í fullu nafni'
            ])
        return True
