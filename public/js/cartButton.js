

let x = 1;
let btnValidate = document.getElementById('cartProductPage');
let suma = 0;
suma = parseInt(suma);


let result = document.getElementsByClassName('cartNumber');



function acumulator() {

    btnValidate.addEventListener("click", function () {
            suma = suma + 1

            
            console.log(suma);
        }
    )

}



    acumulator();

    