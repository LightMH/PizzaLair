from django import forms

CHOICES = [("1", "Borga við afhendingu"), ("2", "Borga með korti")]


class PaymentForm(forms.Form):
    choice_field = forms.ChoiceField(label="", widget=forms.RadioSelect, choices=CHOICES, required=True)
    card_holder = forms.CharField(label="Nafn korthafa ", max_length=100, required=True,
                                  error_messages={
                                      'required': "Vinsamlegast fylltu inn nafn"
                                  }
                                  )
    card_number = forms.CharField(label="Kortanúmer ", min_length=16, max_length=16, required=True)
    cvc = forms.CharField(label="CVC ", max_length=3, min_length=3, required=True)
