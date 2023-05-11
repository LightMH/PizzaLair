console.log("Cart js ir running")
let removeCarts = document.querySelectorAll('.remove-btn'); // sja til
let addCarts = document.querySelectorAll('.add-btn'); // sja til
const emptyCart = document.getElementById("emptycart");
emptyCart.addEventListener('click', empty)

let add = document.querySelector('.add-btn'); 
let remove = document.querySelector('.remove-btn'); 




function onLoadCartNumbers() { // sækja magn af hlutum i localStorage fyrri körfu

    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers) {
        console.log(productNumbers)
    }
}

function onLoadC() { 

    let products = localStorage.getItem('productsInCart');
    const items = localStorage.getItem('cartNumbers')
    cartItems = JSON.parse(products);
    let totalPrice = 0
    let pizzaPrices = 0
    
    // console.log(cartItems)
    if(products.length == null) {
        let product_lenght = 1
        console.log(cartItems)
        
    }else {
        product_lenght = products.length
    }
    for (let i=0; i < 600; i++) {
        console.log(cartItems[i])
        if(cartItems[i]) {
            if(cartItems[i].ID >=500 ) { console.log("above 1000"); onLoadO(cartItems[i],i) }
            console.log(cartItems[i].ID)
            console.log(cartItems[i].Name)
            console.log(cartItems[i].Price)
            console.log(cartItems[i].inCart)
            const span = document.createElement('span')
            const tdRemoveButton = document.createElement('button')
            const tdAddButton = document.createElement('button')
            const tr = document.createElement('tr')
            const tdName = document.createElement('td')
            const tdPrice = document.createElement('td')
            // tdPrice.className = "quant"
            tdRemoveButton.className = 'remove-btn'
            tdAddButton.className = 'add-btn'
            tdRemoveButton.id = cartItems[i].ID
            tdAddButton.id = cartItems[i].ID
            tdRemoveButton.onclick = function () {removePizza(this)}
            tdAddButton.onclick = function () {addPizza(this)}
            const tdTotal = document.createElement('td')
            tdTotal.id = "quant"
            tdName.id = cartItems[i].ID
            tdPrice.id = "price"
            const checkID = document.getElementById('table')
            checkID.appendChild(tr)
            tr.appendChild(tdName)
            tr.appendChild(tdPrice)
            tr.appendChild(tdTotal)
            tr.appendChild(tdRemoveButton)
            tr.appendChild(tdAddButton)
            tdName.innerText = cartItems[i].Name
            tdPrice.innerText = cartItems[i].Price * cartItems[i].inCart
            tdTotal.innerText = cartItems[i].inCart
            tdAddButton.innerText = "+"
            tdRemoveButton.innerText = "-"


            totalPrice += cartItems[i].Price * cartItems[i].inCart

            console.log(totalPrice)
        }
    }
    
    // let values = document.getElementById('quant').innerHTML;
    // console.log(values)
    

    
    document.querySelector('.magn span').textContent = items;
    document.querySelector('.totalprice span').textContent = totalPrice;
    
}



function onLoadO(offer,i) { 
    let string = ""
    let totalPrice = 0
    
    // let index = offer.ID
    let products = localStorage.getItem('productsInCart');
    let offersID = localStorage.getItem('Offers');
    let items = localStorage.getItem('cartNumbers')
    let cartItems = JSON.parse(products);
    
    
    // if(products.length == null) {
    //     let product_lenght = 1
    //     console.log(cartItems)
        
    // }else {
    //     product_lenght = products.length
    // }
    // for (let i=0; i < product_lenght; i++) {
    //     console.log(cartItems)
        
        // let cartOfferItems1 = 1 - 15626
        // let cartOfferItems2 = 5626

    if(offer) {
        console.log(offer.ID)
        console.log(offer.Name)
        console.log(offer.Price)
        console.log(offer.OfferName)
    }

    


    let tdOffer = document.createElement('td')
    let tr = document.createElement('tr')
    let pizzaPrices = 0
    let offersName = localStorage.getItem('Offer Name')
    let tdPrice = document.createElement('td')
    // console.log(offersName)
    // console.log(products.length)
    products = JSON.parse(products);
    // console.log(products[index].length)
    // console.log(index)
    // console.log("Parsed",products)
    // console.log("Parsed check id",products[index].ID)
    // console.log("Parsed check name",products[index].Name)
    // console.log("Parsed check price",products[index].Price)
    
    let checkID = document.getElementById('tableOffer');
    let tdName = document.createElement('td')
    // console.log(cartItems)
    checkID.appendChild(tr)
    
    
    totalPrice += products.Price
    tr.append(tdOffer)
    tr.append(tdName)
    tr.appendChild(tdPrice)
    tdOffer.innerText = offer.OfferName
    tdName.innerText = offer.Name
    tdPrice.innerText = offer.Price
    document.querySelector('.totalprice span').textContent = totalPrice;
    document.querySelector('.magn span').textContent = items;
    document.querySelector('.totalprice span').textContent = totalPrice;

}
function empty() {
    //empty cart, refresh siðu 
    console.log("empty")
    localStorage.getItem('productsInCart'),localStorage.getItem('cartNumbers'),localStorage.getItem('offerCount')
        localStorage.removeItem('productsInCart');
        localStorage.removeItem('cartNumbers');
        localStorage.removeItem('offerCount');
        
        location.reload()
      
      
    
}


function removePizza(button) {
    console.log("remove 1 pizza");
    console.log(button.id);
    let cartItems = localStorage.getItem('productsInCart'); // sækja Id ..
    let cartNum = localStorage.getItem('cartNumbers'); // sækja Id ..
    cartNum = JSON.parse(cartNum);
    cartItems = JSON.parse(cartItems);
    
    console.log(cartItems)
    console.log(cartItems[button.id].inCart)
    console.log
    if(cartItems[button.id].inCart == 1) {
        delete cartItems[button.id]
    } else {
        cartItems[button.id].inCart -= 1    
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    localStorage.setItem('cartNumbers', cartNum - 1);
    location.reload()
}
function addPizza(button) {
    console.log("add 1 pizza")
    console.log(button.id)
    let cartItems = localStorage.getItem('productsInCart'); // sækja Id ..
    let cartNum = localStorage.getItem('cartNumbers'); // sækja Id ..
    cartNum = JSON.parse(cartNum);
    cartItems = JSON.parse(cartItems);

    cartItems[button.id].inCart += 1 

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    localStorage.setItem('cartNumbers', cartNum + 1);
    location.reload()




}


onLoadC()
onLoadO()
onLoadCartNumbers()
