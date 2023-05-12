const continueBtn = document.getElementById('finalBtn')

continueBtn.addEventListener("click", saveCardInfo)



function saveCardInfo() {
    console.log('hæ')



    let cardHolder = document.getElementById('id_card_holder').value
    let cardNumber = document.getElementById('id_card_number').value
    let CVC = document.getElementById('id_cvc').value


    console.log('cardHolder test -->', cardHolder);
    console.log('cardNumber test -->', cardNumber);
    console.log('CVC test -->', CVC);


    sessionStorage.getItem('cardHolder')
    sessionStorage.getItem('cardNumber')
    sessionStorage.getItem('CVC')


    sessionStorage.setItem('cardHolder', cardHolder)
    sessionStorage.setItem('cardNumber', cardNumber)
    sessionStorage.setItem('CVC', CVC)

}


function savedCardInfo() {
    if(sessionStorage.getItem('cardHolder'),
    sessionStorage.getItem('cardNumber'),
    sessionStorage.getItem('CVC')) {

        let cardHolder = sessionStorage.getItem('cardHolder');
        let cardNumber = sessionStorage.getItem('cardNumber');
        let CVC = sessionStorage.getItem('CVC');


        document.querySelector('#id_card_holder').value = cardHolder;
        document.querySelector('#id_card_number').value = cardNumber;
        document.querySelector('#id_cvc').value = CVC;

    }
}



savedCardInfo()