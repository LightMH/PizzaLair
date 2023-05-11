
const continueBtn = document.getElementById('continueToPaymentBtn')

continueBtn.addEventListener("click", saveContactInformation)



function saveContactInformation() {
    console.log('hæ')

    // let fullName = document.querySelector('.totalPrice').value
    // console.log(fullName)
    // let a = document.getElementsById('fullName').val();

    let fullName = document.getElementById('id_full_name').value
    let streetName = document.getElementById('id_street_name').value
    let houseNumber = document.getElementById('id_house_number').value
    let city = document.getElementById('id_city').value
    let country = document.getElementById('id_country').value
    let postalCode = document.getElementById('id_postal_code').value


    console.log('fullname test -->', fullName);
    console.log('streetnumber test -->', streetName);
    console.log('housenumber test -->', houseNumber);
    console.log('city test -->', city);
    console.log('country test -->', country);
    console.log('postal code test -->', postalCode);

    sessionStorage.getItem('fullName')
    sessionStorage.getItem('streetName')
    sessionStorage.getItem('houseNumber')
    sessionStorage.getItem('city')
    sessionStorage.getItem('country')
    sessionStorage.getItem('postalCode')

    sessionStorage.setItem('fullName', fullName)
    sessionStorage.setItem('streetName', streetName)
    sessionStorage.setItem('houseNumber', houseNumber)
    sessionStorage.setItem('city', city)
    sessionStorage.setItem('country', country)
    sessionStorage.setItem('postalCode', postalCode)
}


function savedContactInformation() {
    if(sessionStorage.getItem('fullName'),
    sessionStorage.getItem('streetName'),
    sessionStorage.getItem('houseNumber'),
    sessionStorage.getItem('city'),
    sessionStorage.getItem('country'),
    sessionStorage.getItem('postalCode')) {

        fullName = sessionStorage.getItem('fullName');
        streetName = sessionStorage.getItem('streetName');
        houseNumber = sessionStorage.getItem('houseNumber');
        city = sessionStorage.getItem('city');
        country = sessionStorage.getItem('country');
        postalCode = sessionStorage.getItem('postalCode');

        document.querySelector('#id_full_name').value = fullName;
        document.querySelector('#id_street_name').value = streetName;
        document.querySelector('#id_house_number').value = houseNumber;
        document.querySelector('#id_city').value = city;
        document.querySelector('#id_country').value = country;
        document.querySelector('#id_postal_code').value = postalCode;
    }
}



savedContactInformation()