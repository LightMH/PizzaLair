console.log("Offer JS is Running")
// let value = document.getElementById('price')
// let id = document.getElementById('id')
let setja = document.getElementById('add-cart')
let setja_offer = document.querySelectorAll('.add-cart'); // sja til
// let name__ = document.getElementById('offer.name').innerText;
let price = document.getElementById('pizza.price').innerText;
// let selecter = document.getElementById('select')
let offer = document.getElementById('offer.name'); // sja til
let offers = [ // init list með object af pizza id og inCart til að halda um magn af pizzu
    {
        Offer: offer,
        Price: price
    }
];
let addCarts = document.querySelectorAll('.add-cart');
function addOffer(values) {
    console.log(values)
}

let offer_list = []
for (let i=0; i < offers.length; i++) { 

    addCarts[i].addEventListener('click', () => { // bæta i körfu takki
        console.log("Added to cart");
        addOffer(offers[i]);
    })
    
}



let pNum = document.getElementById('drop-').innerText;

function check(event, val) {
    let list = []
    console.log(event)
    console.log(event.target.value)
    console.log(val)
    var index = document.getElementById("form-select");
    let sel = document.getElementsByClassName('form-select');
    console.log("sel value : ",sel.value)
    // console.log(pNum);
    pNum = pNum.replace ( /[^\d.]/g, '' );
    
    console.log(pNum)
    // localStorage.setItem("Offers", JSON.stringify(0));
    console.log(val)
    let str1 = val.replace ( /[^\d.]/g, '' );
    let total = parseInt(str1, 10)
    // localStorage.setItem("Offers", JSON.stringify(val)); // vista i local storage nyja magnið 
    let curr_price = localStorage.getItem('Offers')
    curr_price = JSON.parse(curr_price)
    curr_price = parseInt(curr_price)
    console.log(curr_price)
    if(isNaN(curr_price)) {
        localStorage.setItem("Offers", JSON.stringify(total));
        return
    }
    if(total > curr_price) {
        
        localStorage.setItem("Offers", JSON.stringify(total));
    }
    if(total < curr_price) {
        
        localStorage.setItem("Offers", JSON.stringify(total));
    }

    console.log(list)
    list.push(val)
    

    console.log(total)
    console.log(list)
    
    
}



// for (let i=0; i < setja_offer.length; i++) { 

//     setja_offer.addEventListener('click', () => { // bæta i körfu takki
//         console.log("Added offer to cart");
//         setja_offer(offers[i])
//         console.log(offers[i])
//     })
    
// }



// function setOffers(offers) { // setja ID og inCart sem json til að geyma svo hægt sé að sækja í seinna

//     let offerItems = localStorage.getItem('Offers'); // sækja Id ..
//     offerItems = JSON.parse(offerItems); 

//     if(offerItems !== null) { 
//         if(offerItems[offers.ID] == undefined){
//             offerItems = {
//                 ...offerItems, // ... er JS magic for loop
//                 [offers.ID]: offers,
//             }
//         }
//         offerItems[offers.ID].inCart += 1
//     } else {
//         offers.inCart = 1;
//         offerItems = {
//             [offers.ID]: offers
//         }
//     }
//     localStorage.setItem("Offers", JSON.stringify(offerItems)); // vista i local storage nyja magnið 
// }


function empty() {
    //empty cart, refresh siðu 
    console.log("empty")
    if(localStorage.getItem('Offers')){
        localStorage.removeItem('Offers');
        
      
      }
    
}


empty()
