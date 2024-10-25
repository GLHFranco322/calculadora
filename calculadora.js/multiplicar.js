
function multiplicacion() {
    let num1 = parseFloat(prompt("Ingrese el primer numero: "));
    let num2 = parseFloat(prompt("Ingrese el segundo numero: "));
}
return num1 * num2;

multiplicar(num1, num2)
    .then(resultado => {
        console.log('Resultado:', resultado);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });