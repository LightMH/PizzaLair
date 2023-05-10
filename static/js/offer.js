console.log("Offer JS is Running")
// let value = document.getElementById('price')
// let id = document.getElementById('id')
let setja = document.getElementById('add-cart')
let setja_offer = document.querySelectorAll('.add-cart'); // sja til
// let name__ = document.getElementById('offer.name').innerText;
let price = document.getElementById('pizza.price');
// let selecter = document.getElementById('select')
let offer = document.getElementById('offer.name'); // sja til
let carts = document.querySelectorAll('.add-cart');

let offers = [ // init list með object af pizza id og inCart til að halda um magn af pizzu
    {
        Offer: offer,
        Price: price
    }
];


let offer_list = []

let button = document.querySelector(".add-cart");
button.addEventListener("click", () => {
    console.log("Button 1 clicked .");

    var valp = document.getElementById('offer.id').innerText ;


    let pizzas = []
    let value1 = $('#select-1.form-select').val()
    let value2 = $('#select-2.form-select').val()
    // let offerID = document.getElementById('offer.id').innerText;
    // offerID = offerID.slice(0, - (offerID.length-1))
    // console.log('offer id --> ',offerID)
    // console.log('offer id --> ')
    console.log(value1)
    console.log(value2)
    

    let offerName = document.getElementById('offer.name').innerText;
    
    console.log(offerName)

    let offer_name = localStorage.getItem('Offer Name');
    localStorage.setItem('Offer Name', offerName);

    let curr_price = localStorage.getItem('Offers')
    curr_price = JSON.parse(curr_price)
    curr_price = parseInt(curr_price)

    let str1 = value1.replace ( /[^\d.]/g, '' );
    let str2 = value2.replace ( /[^\d.]/g, '' );
    // let PID1 = str 
    str1 = str1.slice(0,-1)
    str2 = str2.slice(0,-1)
   
    

    console.log('testing int string2: ',str2)
    console.log('testing int string1: ',str1)
      
    value1 = value1.slice(0,-10)
    value2 = value2.slice(0,-10)
    console.log('Testing string', value1)
    console.log('Testing string', value2)
    let str_for1 = ""
    let str_for2 = ""

    for (let i=0; i < 4; i++) { 
        let count = 0
        str_for2 += str2[i]
        str_for1 += str1[i]
        count += 1
        
        // if(count == 4) {
        //     str_for2 = parseInt(str2, 10)
        //     str_for1 = parseInt(str1, 10)
        // }
    }
    console.log("for loop price 1",str_for1)
    console.log("for loop price 2",str_for2)
    // str_for2 = parseInt(str2)
    // str_for1 = parseInt(str1)
    console.log("for loop price 1",str_for1)
    console.log("for loop price 2",str_for2)
    pizzas.push(value1,value2)
    console.log(pizzas)

   let str_int1 = parseInt(str_for1)
   let str_int2 = parseInt(str_for2)
   valp = parseInt(valp)
    if(str_int1 > str_int2) {
        
        saveInt = str_int1
    } else {
        
        saveInt = str_int2
        
        
    }
        // localStorage.setItem("Offers", JSON.stringify(pizzas));
        // return
    
    if(str_for1 > str_for2) {
        
        localStorage.setItem("Offers", JSON.stringify(valp));
    } else {
        localStorage.setItem("Offers", JSON.stringify(valp));
        
    }

    
    valp = valp * (5**6)
    console.log("ID int test", valp)
    pr = localStorage.getItem('Offers')
    console.log(pr)
    
    let product = [ // init list með object af pizza id og inCart til að halda um magn af pizzu
    {
        ID: valp,
        Name: pizzas,
        Price: saveInt,
        inCart: 0
    }
];
    setItems(product[0]);

});


// let button2 = document.querySelector(".add-cart");
// for (let i=0; i < carts.length; i++) { 
//     carts[i].addEventListener("click", () => { 
//         var valp = document.getElementById('pizza.id').innerText ;
//         var valname = document.getElementById('pizza.name').innerText;
//         var valprice = document.getElementById('pizza.price').innerText ;
//         valprice = parseFloat(valprice);

//         valprice = valprice.slice(0,-2);
//         let products = [ // init list með object af pizza id og inCart til að halda um magn af pizzu
//         {
//             ID: valp,
//             Name: valname,
//             Price: valprice,
//             inCart: 0
//         }
        
//     ];
//     cartNumbers(products[i]);
//     }
//     )
// }


// function cartNumbers(product) {  // fara i gegnum localStorage og bæta við 1 ef bætt er i körfu pizzu
    
//     let productNumbers = localStorage.getItem('cartNumbers');

//     productNumbers = parseInt(productNumbers);
    
//     if(productNumbers) {
//         localStorage.setItem('cartNumbers', productNumbers + 1);
        
//     } else {
//         localStorage.setItem('cartNumbers', 1);
        
//     }
//     setItems(product);
// }



function setItems(product) { // setja ID og inCart sem json til að geyma svo hægt sé að sækja í seinna

    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

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
        if( cartItems[product.ID].inCart == 2) {
            cartItems[product.ID].inCart = 2
            // localStorage.setItem('cartNumbers', productNumbers = 2);
            // localStorage.setItem('cartNumbers', productNumbers = 2);
            localStorage.setItem("productsInCart", JSON.stringify(cartItems)); // vista i local storage nyja magnið 

            return
        }
        
    } else {
        product.inCart = 1;
        cartItems = {
            [product.ID+1]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems)); // vista i local storage nyja magnið 
   
}







function empty() {
    //empty cart, refresh siðu 
    console.log("empty")
    if(localStorage.getItem('Offers')){
        localStorage.removeItem('Offers');
      
      }
    
}


empty()
