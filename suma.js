const prompt = require("prompt-sync")({ sigint: true });

function suma() {
    let num1 = parseFloat(prompt("Ingrese el primer numero: "))
    let num2 = parseFloat(prompt("Ingrese el segundo numero: "))
    let resultado = num1 + num2
    console.log(`El resultado de la suma es: ${resultado}`)
}
suma()

// Bloque para que el usuario elija que quiere hacer

