from menu.models import Pizza, Toppings, Order, Offers  # Details


def get_all_pizzas():
    pizza_list = Pizza.objects.all()
    return pizza_list

# def get_pizza_by_id(id):
#   print(id)
#  return Pizza.(id)
