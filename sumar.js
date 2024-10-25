const prompt = require("prompt-sync")({ sigint: true });

function suma(a, b) {;  //suma las 2 varibles, exporta la funcion
    return a + b;
}

function sumar() {
    let num1 = parseFloat(prompt("Ingrese el primer numero: "))
    let num2 = parseFloat(prompt("Ingrese el segundo numero: "))
    let resultado = suma(num1, num2)
    console.log(`El resultado de la suma es: ${resultado}`)
}
sumar() //llamar a la funcion

module.exports = sumar //para exportar
