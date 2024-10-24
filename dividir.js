const prompt = require('prompt-sync')({ sigint: true });

function dividir() {
    let num1 = parseInt(prompt("Por favor, introduce el primer número:"), 10);
    let num2 = parseInt(prompt("Por favor, introduce el segundo número:"), 10);

    switch (true) {
        case isNaN(num1):
            console.log("El primer número no es válido.");
            break;
        case isNaN(num2):
            console.log("El segundo número no es válido.");
            break;
        case num2 === 0:
            console.log("El divisor no puede ser cero.");
            break;
        default:
            let result = num1 / num2;
            console.log("El resultado de la división es: " + result);
            break;
    }
}

module.exports = dividir;
