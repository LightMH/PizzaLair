

let proceed = document.querySelector('.check_cart')
proceed.addEventListener('click',() => {
    empty();
})
function onLoadC() {

    let products = localStorage.getItem('productsInCart');
    const items = localStorage.getItem('cartNumbers')
    cartItems = JSON.parse(products);
    let totalPrice = 0
    let pizzaPrices = 0

    if (products) {

        

    
    for (let i = 0; i < products.length; i++) {
        console.log(cartItems[i])
        if (cartItems[i]) {
            
            const span = document.createElement('span')
            const tr = document.createElement('tr')
            const tdName = document.createElement('td')
            const tdPrice = document.createElement('td')
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

           
        }
    }
    document.querySelector('.magn span').textContent = items;
    document.querySelector('.totalprice span').textContent = totalPrice;}

}


function onLoadO() { 
    let string = ""
    let totalPrice = 0
    let products = localStorage.getItem('productsInCart');
    let offersID = localStorage.getItem('Offers');
    let items = localStorage.getItem('cartNumbers')
    let cartItems = JSON.parse(products);
    if(cartItems){
    for (let i = 0; i < 600; i++) {
        if(cartItems[i]){
            if(cartItems[i].ID >500 ) { console.log("Offer ID --",cartItems[i])


    let tdOffer = document.createElement('td')
    let tr = document.createElement('tr')
    let pizzaPrices = 0
    let offersName = localStorage.getItem('Offer Name')
    let tdPrice = document.createElement('td')
    tdPrice.id = "Oprice"
    let tdTotal = document.createElement('td')
    tdTotal.id = "quant"
    let checkID = document.getElementById('tableOffer');
    let tdName = document.createElement('td')
    checkID.appendChild(tr)
    
    
    totalPrice += cartItems[i].Price
    tr.append(tdOffer)
    tr.append(tdName)
    tr.appendChild(tdPrice)
    tr.appendChild(tdTotal)
    tdOffer.innerText = cartItems[i].OfferName
    tdName.innerText = cartItems[i].Name
    tdPrice.innerText = cartItems[i].Price
    tdTotal.innerText = cartItems[i].inCart
   
}
}
}
    let pizzPrice = document.getElementById('total').innerText;
    let offPrice = document.getElementById('Oprice').innerText;
    pizzPrice = parseInt(pizzPrice)
    offPrice = parseInt(offPrice)
    let TPrice = pizzPrice +  offPrice


    document.querySelector('.totalprice span').textContent = TPrice;
    document.querySelector('.magn span').textContent = items;

}}

function empty() {
    //empty cart, refresh siðu
    
    localStorage.getItem('productsInCart'),localStorage.getItem('cartNumbers'),localStorage.getItem('offerCount')
        localStorage.removeItem('productsInCart');
        localStorage.removeItem('cartNumbers');
        localStorage.removeItem('offerCount');

        location.reload()
}



onLoadC()
onLoadO()