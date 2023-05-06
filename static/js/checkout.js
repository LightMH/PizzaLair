console.log("running")

let carts = document.querySelectorAll('.add-cart'); // sja til


var valp = document.getElementById('pizza.id').innerText ; // sækja pizza id

console.log(valp);


let products = [ // get list með object af pizza id og inCart til að halda um magn af pizzu
    {
        ID: valp,
        inCart: 0
    }
];

for (let i=0; i < carts.length; i++) { 

    carts[i].addEventListener('click', () => { // bæta i körfu takki
        console.log("Added to cart");
        cartNumbers(products[i]);
    })
    
}

function onLoadCartNumbers() { // sækja magn af hlutum i localStorage fyrri körfu

    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers; // cart html class og span breyta tölu fyrir cart icon
    }
}

function cartNumbers(product) {  // fara i gegnum localStorage og bæta við 1 ef bætt er i körfu pizzu
    
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    
    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) { // setja ID og inCart sem json til að geyma svo hægt sé að sækja í seinna

    let cartItems = localStorage.getItem('productsInCart'); // sækja Id ..
    cartItems = JSON.parse(cartItems); 

    if(cartItems !== null) { 
        if(cartItems[product.ID] == undefined){
            cartItems = {
                ...cartItems, // man ekki. -->  ... er eitthvað js magic
                [product.ID]: product
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
}


onLoadCartNumbers()