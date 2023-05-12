$(document).ready(function () {
    $('#searchBtn').on('click', function (e) {
        e.preventDefault();
        let searchText = $('#search_box').val();
        $.ajax({
            url: '/menu?search_filter=' + searchText,
            type: 'GET',
            success: function (resp) {
                let newHtml = resp.data.map(d => {
                    return `<div class="well pizza">
                                 <a href="/menu/${d.id}">
                                 <img class="pizzaImg" src="${d.image}" alt="pizzaImg">
                                 </a>
                                 <h4>${d.name}</h4>
                                 <p>${d.description}</p>
                            </div>`
                });
                $('.pizzas').html(newHtml.join(''));
                $('#search_box'.val(''));
            },
            error: function (xhr, status, error) {
                console.log(error)
            }

        })
    })
});


const menuFilter = (filter) => {
    const pizzaList = document.getElementById('pizzas_id').children;

    for (let i = 0; i < pizzaList.length; i++) {
        const pizza = pizzaList[i]
        const tag = pizza.children[0].children[0].dataset['filterTag']
        if (tag.includes(filter)) {
            pizza.style.display = 'block';
        } else {
            pizza.style.display = 'none';
        }

    }
};


const orderMenuByName = (filter) => {
    const pizzas = document.getElementById("pizzas_id").children

    let pizza_dict = {}
    for (let i = 0; i < pizzas.length; i++) {
        let name = pizzas[i].children[0].children[0].children[1].children[0].children[0].children[0].innerHTML
        pizza_dict[name] = pizzas[i]
    }

    let items = Object.keys(pizza_dict).map(
        (key) => {
            return [key, pizza_dict[key]]
        }
    );

    items.sort()

    // clearing the innerHTML to repopulate the menu so that is it sorted by name
    const elements = document.getElementById('pizzas_id')
    elements.innerHTML = ""

    for (const value of items.values()) {
        elements.appendChild(value[1])
    }
}

const orderMenuByPrice = (filter) => {
    const pizzas = document.getElementById("pizzas_id").children

    let elements = [];
    for (let i = 0; i < pizzas.length; i++) {
        let price = pizzas[i].children[0].children[0].children[1].children[0].children[2].innerHTML
        
        price = Number(price
            .replace('Verð:', '')
            .replace('kr.', ''))
        
        elements.push([price, pizzas[i]])
    }

    elements.sort((first, second) => {
        if (first[0] < second[0]) {
            return -1;
        }
        if (first[0] > second[0]) {
            return 1;
        }
        return 0;
    });

    // clearing the innerHTML to repopulate the menu so that is it sorted by name
    const container = document.getElementById('pizzas_id')
    container.innerHTML = ""

    for (const value of elements.values()) {
        container.appendChild(value[1])
    }

};



