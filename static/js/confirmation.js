console.log("confirmation js running")

function onLoadC() {

    let products = localStorage.getItem('productsInCart');
    const items = localStorage.getItem('cartNumbers')
    cartItems = JSON.parse(products);
    let totalPrice = 0
    let pizzaPrices = 0

    // console.log(cartItems)
    if (products) {

        console.log(cartItems)

    }
    for (let i = 0; i < products.length; i++) {
        console.log(cartItems[i])
        if (cartItems[i]) {
            console.log(cartItems[i].ID)
            console.log(cartItems[i].Name)
            console.log(cartItems[i].Price)
            console.log(cartItems[i].inCart)
            const span = document.createElement('span')
            const tr = document.createElement('tr')
            const tdName = document.createElement('td')
            const tdPrice = document.createElement('td')
            // tdPrice.className = "quant"
            const tdTotal = document.createElement('td')
            tdTotal.id = "quant"
            tdName.id = cartItems[i].ID
            tdPrice.id = "price"
            const checkID = document.getElementById('table')
            checkID.appendChild(tr)
            tr.appendChild(tdName)
            tr.appendChild(tdPrice)
            tr.appendChild(tdTotal)
            tdName.innerText = cartItems[i].Name
            tdPrice.innerText = cartItems[i].Price * cartItems[i].inCart
            tdTotal.innerText = cartItems[i].inCart


            totalPrice += cartItems[i].Price * cartItems[i].inCart

            console.log(totalPrice)
        }
    }

    let values = document.getElementById('quant').innerHTML;
    console.log(values)


    document.querySelector('.magn span').textContent = items;
    document.querySelector('.totalprice span').textContent = totalPrice;

}

onLoadC()