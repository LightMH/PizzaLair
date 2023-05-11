console.log("Hello js")
const radioBtn1 = document.getElementById("id_choice_field_0");
const radioBtn2 = document.getElementById("id_choice_field_1");

const cardHolder = document.getElementById("id_card_holder")
const cardNumber = document.getElementById("id_card_number")
const cvc = document.getElementById("id_cvc")
radioBtn1.addEventListener("change", (event) => {
    console.log("changing")
    cardHolder.disabled = true
    cardNumber.disabled = true
    cvc.disabled = true
})

radioBtn2.addEventListener("change", (event) => {
    console.log("changing again")
    cardHolder.disabled = false
    cardNumber.disabled = false
    cvc.disabled = false
})