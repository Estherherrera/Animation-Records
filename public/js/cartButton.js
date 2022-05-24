

let btnValidate = document.getElementById('cartProductPage');
let suma=''
let num= document.getElementsByClassName('cartNumber');
num=parseInt(num)

let result='';



function acumulator() {

    btnValidate.addEventListener("click", function () {
        suma=num + 1;
        console.log(suma);
    })

}




acumulator();