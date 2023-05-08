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
    if(products) {
        
        console.log(cartItems)
        
    }
    for (let i=0; i < products.length; i++) {
        console.log(cartItems[i])
        if(cartItems[i]) {
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
    
    let values = document.getElementById('quant').innerHTML;
    console.log(values)
    

    
    document.querySelector('.magn span').textContent = items;
    document.querySelector('.totalprice span').textContent = totalPrice;
    
}



function onLoadCartData(products){
    let product = localStorage.getItem('productsInCart');
    const h1 = document.createElement("h1");
    const underline = document.createElement('u');
    underline.innerText = product;
    h1.append(underline);
    document.body.append(h1);
    console.log(product)
    
}

function empty() {
    //empty cart, refresh siðu 
    console.log("empty")
    if(localStorage.getItem('productsInCart'),localStorage.getItem('cartNumbers')){
        localStorage.removeItem('productsInCart');
        localStorage.removeItem('cartNumbers');
        // onLoadCartNumbers();
        // window.location.reload();
      
      }
    
}


function removePizza(button) {
    console.log("remove 1 pizza");
    console.log(button.id);
    let numbers = localStorage.getItem('cartNumbers');
    numbers = JSON.parse(numbers); 
    if(numbers[product.ID] == undefined){
        numbers = {
            ...numbers, // ... er JS magic for loop
            [product.ID]: product,
        }}
    console.log(number)
    // const items = JSON.parse(localStorage.getItem('productsInCart'));
    // localStorage.removeItem('productsInCart',button.id);
    
}
function addPizza(button) {
    console.log("add 1 pizza")
    console.log(button.id)
}

onLoadCartData()
onLoadC()
onLoadCartNumbers()