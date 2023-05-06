console.log("navbar js running")

function onLoadCartNumbers() { // sækja magn af pizzum i körfu sett inn i navbar.html til að það komi allstaðar
    
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

onLoadCartNumbers()