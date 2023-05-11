
const continueBtn = document.getElementById('continueToPaymentBtn')

continueBtn.addEventListener("click", saveContactInformation)

const saveContactInformation = () => {
    console.log('hæ')
    let fullName = document.getElementById('fullName').innerText
    let streetName = document.getElementById('streetName').innerText
    let houseNumber = document.getElementById('houseNumber').innerText
    let city = document.getElementById('city').innerText
    let country = document.getElementById('country').innerText
    let postalCode = document.getElementById('postalCode').innerText

    localStorage.getItem('fullName')
    localStorage.getItem('streetName')
    localStorage.setItem('houseNumber', houseNumber)
    localStorage.setItem('city', city)
    localStorage.setItem('country', country)
    localStorage.setItem('postalCode', postalCode)

    localStorage.setItem('fullName', fullName)
    localStorage.setItem('streetName', streetName)
    localStorage.setItem('houseNumber', houseNumber)
    localStorage.setItem('city', city)
    localStorage.setItem('country', country)
    localStorage.setItem('postalCode', postalCode)
}
