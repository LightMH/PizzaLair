from menu.models import Pizza, Toppings, Details, Order, Offers
def get_all_pizzas():
    pizza_list = Pizza.objects.all()
    return pizza_list

def get_pizza_by_ID(id):
    return Pizza.objects.filter()