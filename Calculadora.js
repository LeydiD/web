const txtNum1= document.getElementById("num1")
const txtOperacion= document.getElementById("operacion")
const txtNum2= document.getElementById("num2")
const buttonCalcular= document.getElementById("calcular")
const pResultado= document.getElementById("resultado")

buttonCalcular.addEventListener('click', calcular)

function calcular(){
    const tipo= txtOperacion.value
    const op1= parseFloat(txtNum1.value)
    const op2= parseFloat(txtNum2.value)

    if((tipo== "+" || tipo== "-" || tipo== "*"||tipo== "/" )&& ((isNaN(op1)==false && isNaN(op2)==false))){
        let resultado
    switch(tipo){
        case "+": 
            resultado= op1+op2 
            break; 
        case "-":
            resultado= op1-op2
            break;
        case "*":
            resultado= op1*op2
            break;
        case"/":
            resultado= op1/op2
            break;
    }
        pResultado.innerText=("El resultado es = "+resultado);
    }
    else {
        pResultado.innerText=("Cálculo Imposible");
    }


}