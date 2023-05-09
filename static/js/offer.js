console.log("Offer JS is Running")
// let value = document.getElementById('price')
// let id = document.getElementById('id')
let setja = document.getElementById('add-cart')
let setja_offer = document.querySelectorAll('.add-cart'); // sja til
// let name__ = document.getElementById('offer.name').innerText;
let price = document.getElementById('pizza.price');
// let selecter = document.getElementById('select')
let offer = document.getElementById('offer.name'); // sja til


let offers = [ // init list með object af pizza id og inCart til að halda um magn af pizzu
    {
        Offer: offer,
        Price: price
    }
];


let offer_list = []

let button = document.querySelector(".add-cart");
button.addEventListener("click", () => {
    console.log("Button clicked.");

    


    let pizzas = []
    let value1 = $('#select-1.form-select').val()
    let value2 = $('#select-2.form-select').val()

    let products = [ // init list með object af pizza id og inCart til að halda um magn af pizzu
    {
        ID: offer,
        Name: valname,
        Price: valprice,
        inCart: 0
    }
];

    let offerName = document.getElementById('offer.name').innerText;
    console.log(offerName)

    let offer_name = localStorage.getItem('Offer Name');
    localStorage.setItem('Offer Name', offerName);

    let curr_price = localStorage.getItem('Offers')
    curr_price = JSON.parse(curr_price)
    curr_price = parseInt(curr_price)

    let str1 = value1.replace ( /[^\d.]/g, '' );
    let str2 = value2.replace ( /[^\d.]/g, '' );
    let valueInt1 = parseInt(str1, 10)
    let valueInt2 = parseInt(str2, 10)

    
    console.log('Testing', valueInt1)
    console.log('Testing', valueInt2)   
    value1 = value1.slice(0,-7)
    value2 = value2.slice(0,-7)
    console.log('Testing', value1)
    console.log('Testing', value2)

    pizzas.push(value1,value2)
    console.log(pizzas)

    if(isNaN(curr_price)) {

        if(valueInt1 > valueInt2) {
            pizzas.push(valueInt1);
            localStorage.setItem("Offers", JSON.stringify(pizzas));
        } else {
            pizzas.push(valueInt2);
            localStorage.setItem("Offers", JSON.stringify(pizzas));
            
        }
        // localStorage.setItem("Offers", JSON.stringify(pizzas));
        // return
    }
    if(valueInt1 > valueInt2) {
        
        localStorage.setItem("Offers", JSON.stringify(pizzas, valueInt1));
    } else {
        localStorage.setItem("Offers", JSON.stringify(pizzas, valueInt2));
        
    }


    pr = localStorage.getItem('Offers')
    console.log(pr)
    

});


button.addEventListener("click", () => {

    let cartItems = localStorage.getItem('productsInCart'); // sækja Id ..
    cartItems = JSON.parse(cartItems); 

    if(cartItems !== null) { 
        if(cartItems[product.ID] == undefined){
            cartItems = {
                ...cartItems, // ... er JS magic for loop
                [product.ID]: product,
            }
        }
        cartItems[product.ID].inCart += 1
    } else {
        product.inCart = 1;
        cartItems = {
            [product.ID]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems)); // vista i local storage nyja magnið 
})

function empty() {
    //empty cart, refresh siðu 
    console.log("empty")
    if(localStorage.getItem('Offers')){
        localStorage.removeItem('Offers');
      
      }
    
}


empty()
