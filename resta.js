const prompt = require("prompt-sync")({ sigint: true });
//Resta
function resta(num1,num2){
    let resultado = num1 - num2;
    return resultado;
}
console.log("Bienvenido a la calculadora virtual")
console.log("Indique que operación desea realizar")
console.log("2. Resta")
let opcion = parseInt(prompt("Indique que operación desea realizar:"))

let numero1;
let numero2;
let resultado;

switch (opcion) {
    case 2:
        numero1 = parseInt(prompt("Indique el primer numero a restar:"))
        numero2 = parseInt(prompt("Indique el segundo numero a restar:"))
        resultado = resta(numero1,numero2)
        console.log("El resultado de la operación es: " + resultado)
        break;
        default:
        console.log("Los valores ingresados son incorrectos")
        break;
}
module.exports = resta;