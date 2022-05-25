

let btnValidate = document.getElementById('cartProductPage');
let suma = 0
suma = parseInt(suma);
const result = document.getElementById('cartNumber');


function acumulator() {
    suma = suma + 1;
    result.innerHTML = suma
}

function show() {
    for (i = 0; i < 15; i++) {
        btnValidate.addEventListener('click', acumulator)
    }
}

show();