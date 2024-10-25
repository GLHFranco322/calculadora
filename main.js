const sumar = require('./suma');
const restar = require('./resta');
const multiplicar = require('./multiplicar');
const dividir = require('./dividir');

const prompt = require('prompt-sync')({ sigint: true });

console.log("Elige una operación:");
console.log("1. Suma");
console.log("2. Resta");
console.log("3. Multiplicación");
console.log("4. División");

let opcion = prompt("Introduce el número de la operación que deseas realizar: ");

switch(opcion) {
    case '1':
        sumar();
        break;
    case '2':
        restar();
        break;
    case '3':
        multiplicar();
        break;
    case '4':
        dividir();
        break;
    default:
        console.log("Opción no válida");
        break;
}
