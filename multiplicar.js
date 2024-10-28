const prompt = require("prompt-sync")({ sigint: true });

function multiplicar(a, b) {
    return a * b;
}

function pedirNumerosYMultiplicar() {
    let num1 = parseFloat(prompt("Ingrese el primer número: "));
    let num2 = parseFloat(prompt("Ingrese el segundo número: "));

    return new Promise((resolve, reject) => {
        if (isNaN(num1) || isNaN(num2)) {
            reject(new Error("Los valores ingresados deben ser números."));
        } else {
            let resultado = multiplicar(num1, num2);
            resolve(resultado);
        }
    });
}

pedirNumerosYMultiplicar()
    .then(resultado => {
        console.log('Resultado:', resultado);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });