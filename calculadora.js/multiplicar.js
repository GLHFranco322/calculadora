
function multiplicarAsync(num1, num2) {
    return new Promise((resolve, reject) => {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            reject(new Error('Ambos argumentos deben ser números'));
        } else {
            resolve(num1 * num2);
        }
    });
}

multiplicarAsync(num1, num2)
    .then(resultado => {
        console.log('Resultado:', resultado);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });