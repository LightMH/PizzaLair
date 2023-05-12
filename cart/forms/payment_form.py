from django import forms



class PaymentForm(forms.Form):
    card_holder = forms.CharField(label="Nafn korthafa ", max_length=100, required=True,
                                  error_messages={
                                      'required': "Vinsamlegast fylltu inn nafn"
                                  }
                                  )
    card_number = forms.CharField(label="Kortanúmer ", min_length=16, max_length=16, required=True,
                                  error_messages={
                                      'required': "Vinsamlegast fylltu inn kortanúmer"
                                  }
                                  )
    cvc = forms.CharField(label="CVC ", max_length=3, min_length=3, required=True,
                          error_messages={
                              'required': "Vinsamlegast fylltu inn CVC"
                          }
                          )
