const prompt = require("prompt-sync")({ sigint: true });

function resta(a, b) {;  //suma las 2 varibles, exporta la funcion
    return a - b;
}

function restar() {
    let num1 = parseInt(prompt("Ingrese el primer numero: "))
    let num2 = parseInt(prompt("Ingrese el segundo numero: "))
    let resultado = resta(num1, num2)
    console.log(`El resultado de la resta es: ${resultado}`)
}
restar() //llamar a la funcion

module.exports = restar //para exportar
