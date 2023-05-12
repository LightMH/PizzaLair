from django.shortcuts import render


class PizzaLairExceptionsHandler:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        return response

    def process_exception(self, request, exception):
        # This is so we can catch the error/Exceptions that might occur and display our error page
        if isinstance(exception, Exception):
            return render(request, '500.html')
