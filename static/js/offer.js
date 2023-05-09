console.log("Offer JS is Running")
let value = document.getElementById('price')
let id = document.getElementById('id')

let name__ = document.getElementById('offer.name').innerText;
let price = document.getElementById('pizza.price').innerText;
let selecter = document.getElementById('select')
let offer = document.querySelectorAll('.add-cart'); // sja til
let offers = [ // init list með object af pizza id og inCart til að halda um magn af pizzu
    {
        
        Offer: offer,
        Name: name__,
        Price: price,
        inCart: 0
    }
];

let offer_list = []
for (let i=0; i < offer.length; i++) { 

    offer[i].addEventListener('click', () => { // bæta i körfu takki
        console.log("Added to cart");
        setOffers(offers[i]);
    })
    
}

function check(val) {
    let list = []
    console.log(val)
    str1 = val.replace ( /[^\d.]/g, '' );
    if(val != NaN && list.length >=0) {
        console.log("is Okey")
        list.push(val)
        console.log(list)
    }
    let offer = document.getElementsByClassName('OfferName')
    console.log(offer)
    console.log(list)
    // offer_list.push(val)
    // total = parseInt(str1, 10)
    // offer_list.push(total)
    // console.log(total)
    // console.log(offer_list)
   
    
}

// function check2(off_list) {
//     console.log(off_list)
    
// }

// for (let i=0; i < carts.length; i++) { 

//     carts[i].addEventListener('click', () => { // bæta i körfu takki
//         console.log("Added to cart");
//         cartNumbers(products[i]);
//     })
    
// }



function setOffers(offers) { // setja ID og inCart sem json til að geyma svo hægt sé að sækja í seinna

    let offerItems = localStorage.getItem('Offers'); // sækja Id ..
    offerItems = JSON.parse(offerItems); 

    if(offerItems !== null) { 
        if(offerItems[offers.ID] == undefined){
            offerItems = {
                ...offerItems, // ... er JS magic for loop
                [offers.ID]: offers,
            }
        }
        offerItems[offers.ID].inCart += 1
    } else {
        offers.inCart = 1;
        offerItems = {
            [offers.ID]: offers
        }
    }
    localStorage.setItem("Offers", JSON.stringify(offerItems)); // vista i local storage nyja magnið 
}


function empty() {
    //empty cart, refresh siðu 
    console.log("empty")
    if(localStorage.getItem('Offers')){
        localStorage.removeItem('Offers');
        
      
      }
    
}


empty()
