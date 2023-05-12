const continueBtn = document.getElementById('finalBtn')

continueBtn.addEventListener("click", saveCardInfo)



function saveCardInfo() {

    let cardHolder = document.getElementById('id_card_holder').value
    let cardNumber = document.getElementById('id_card_number').value
    let CVC = document.getElementById('id_cvc').value
    let month = document.getElementById('id_expiry_month').value
    let year = document.getElementById('id_expiry_year').value

    sessionStorage.getItem('cardHolder')
    sessionStorage.getItem('cardNumber')
    sessionStorage.getItem('CVC')
    sessionStorage.getItem('month')
    sessionStorage.getItem('year')

    sessionStorage.setItem('cardHolder', cardHolder)
    sessionStorage.setItem('cardNumber', cardNumber)
    sessionStorage.setItem('CVC', CVC)
    sessionStorage.setItem('month', month)
    sessionStorage.setItem('year', year)
}


function savedCardInfo() {
    if(sessionStorage.getItem('cardHolder'),
    sessionStorage.getItem('cardNumber'),
    sessionStorage.getItem('CVC'),
    sessionStorage.getItem('month'),
    sessionStorage.getItem('year')
    ) {
        let cardHolder = sessionStorage.getItem('cardHolder');
        let cardNumber = sessionStorage.getItem('cardNumber');
        let CVC = sessionStorage.getItem('CVC');
        let month = sessionStorage.getItem('month');
        let year = sessionStorage.getItem('year');

        document.querySelector('#id_card_holder').value = cardHolder;
        document.querySelector('#id_card_number').value = cardNumber;
        document.querySelector('#id_cvc').value = CVC;
        document.querySelector('#id_expiry_month').value = month;
        document.querySelector('#id_expiry_year').value = year;
    }
}

savedCardInfo()