const prompt = require("prompt-sync")({ sigint: true });

function sumar(a, b) {;  //suma las 2 varibles, exporta la funcion
    return a + b;
}

function suma() {
    let num1 = parseFloat(prompt("Ingrese el primer numero: "))
    let num2 = parseFloat(prompt("Ingrese el segundo numero: "))
    let resultado = sumar(num1, num2)
    console.log(`El resultado de la suma es: ${resultado}`)
}
suma() //llamar a la funcion

module.exports = suma  //para exportar
