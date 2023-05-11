console.log("Offer JS is Running");

let price = document.getElementById('pizza.price');
let offerName = document.getElementById('offer.name').innerText;
let valID = document.getElementById('offer.id').innerText;
valID = parseInt(valID)  + 500;
let carts = document.querySelectorAll('.add-cart');
let values = document.getElementsByClassName('form-select');
let pizzas = [];
let offerdesc = document.getElementById('offerDescription').innerText;

let offerLen = offerdesc.length;
let offerPrice = offerdesc.slice(offerLen-8,offerLen-3);

offerPrice = parseInt(offerPrice);
if(offerPrice){
    let count = localStorage.getItem('offerCount')
}
// let count = localStorage.setItem('offerCount',0)
let saveInt = offerPrice;

let testp = []
let t1 = "test P1"
let t2 = "test p2"
testp.push(t1)
testp.push(t2)
// let product = [ // init list með object af pizza id og inCart til að halda um magn af pizzu
//         {
//             ID: 1,
//             OID: valID,
//             Name: pizzas,
//             Price: saveInt,
//             inCart: 0,
//             OfferName: offerName,
//         }
//     ];

let product = [ // init list með object af pizza id og inCart til að halda um magn af pizzu
        {
            ID: valID,
            Name: pizzas,
            Price: saveInt,
            inCart: 0,
            OfferName: offerName,
        }
    ];

    


for (let i=0; i < carts.length; i++) { 

    carts[i].addEventListener('click', () => { // bæta i körfu takki
        console.log("Added to cart");
        console.log(product)
        product[i].Name = testp
        let cIndex = i
        console.log(product)
        let savePrice = 0
        for (let i = 0; i < values.length; i++) {
                let PriceOffer_2_1 = 0 
                let val = i+1
                let add = '#select-'+val+'.form-select'
                console.log('Values test', $(add).val());
                
                let __pName = $(add).val();
                let __pName_sliced = __pName.slice(0,-6)
                let __Price_sliced = __pName.slice(__pName.length- 6,- 2)
                let __Price = parseInt(__Price_sliced)

                if(i==0){savePrice =  __Price; } 
                if(i==1 && __Price > savePrice) { savePrice = __Price}

                console.log("only name -->",__pName)
                console.log("only price -->",__Price_sliced)
                console.log("INT price -->",__Price)
                console.log("saved price -->",savePrice)
                pizzas.push(__pName_sliced);    
        }
        console.log(valID)
        if(valID == 501) {
            product[cIndex].Price = savePrice
            console.log("saved price logged")
        }
        product[cIndex].Name = pizzas
        // product[i].Name = pizzas
        cartNumbers(product[i]);
    })
    
}
function setItems(product) { // setja ID og inCart sem json til að geyma svo hægt sé að sækja í seinna

    let cartItems = localStorage.getItem('productsInCart'); // sækja Id ..
    cartItems = JSON.parse(cartItems); 

    if(cartItems !== null) { 
        if(cartItems[product.ID] == undefined){
            cartItems = {
                ...cartItems, // ... er JS magic for loop
                [product.ID]: product,
            }
        }
        cartItems[product.ID].inCart = 1
    } else {
        product.inCart = 1;
        cartItems = {
            [product.ID]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems)); // vista i local storage nyja magnið 
}

function cartNumbers(product) {  // fara i gegnum localStorage og bæta við 1 ef bætt er i körfu pizzu
    
    let productNumbers = localStorage.getItem('cartNumbers');
    let offerCheck = localStorage.getItem('productsInCart');
    offerCheck= JSON.parse(offerCheck);
    productNumbers = parseInt(productNumbers);
    
    count = localStorage.getItem('offerCount')

    // if(product.ID > 500)

    if(!count) { 
        localStorage.setItem('offerCount', 1);
        let counter = localStorage.getItem('offerCount')
        let cartNum = localStorage.getItem('cartNumbers')
        // localStorage.setItem('cartNumbers', cartNum+1)
        
        // if(productNumbers) {
            localStorage.setItem('cartNumbers',  + 1);
            document.querySelector('.cart span').textContent = productNumbers + 1;
            
        // }}

        // localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
        // setItems(product);
        // for (let i=0; i < 600; i++) {
        //     if(offerCheck.ID > 500){  return console.log("retttt");} 
        // }
   

    
        // if(product.ID >500 && productNumbers == null ){
        //     localStorage.setItem('cartNumbers', 1);
        //     document.querySelector('.cart span').textContent = 1;
        //     setItems(product);
        // }

        // if(product.ID >500 && productNumbers >= 1) {
        //     localStorage.setItem('cartNumbers', productNumbers + 1);
        //     document.querySelector('.cart span').textContent = productNumbers + 1;
        //     setItems(product);
        // } 
    
     }setItems(product)
        console.log("ASDASDASDSAD --<-<--<-<", offerCheck.length)
     ;}





