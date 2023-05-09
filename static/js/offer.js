console.log("Offer JS is Running")
value = document.getElementById('price')

// let products = [ // init list með object af pizza id og inCart til að halda um magn af pizzu
//     {
//         ID: valp,
//         Offer: offer,
//         Name: valname,
//         Price: valprice,
//         inCart: 0
//     }
// ];

let offer_list = []


function check(val) {
    console.log(val)
    str1 = val.replace ( /[^\d.]/g, '' );
    if(val != NaN) {
        console.log("is Okey")
    }
        

    offer_list.push(val)
    total = parseInt(str1, 10)
    offer_list.push(total)
    console.log(total)
    console.log(offer_list)
   
    
}

// function check2(off_list) {
//     console.log(off_list)
    
// }