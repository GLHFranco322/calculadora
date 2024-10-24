const prompt = require("prompt-sync")({ sigint: true });

function sumar() {
    let num1 = parseFloat(prompt("Ingrese el primer numero: "))
    let num2 = parseFloat(prompt("Ingrese el segundo numero: "))
    let resultado = num1 + num2
    console.log(`El resultado de la suma es: ${resultado}`)
}
sumar()

// Bloque para que el usuario elija que quiere hacer

