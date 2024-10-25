function dividir(num1, num2) {
    if (num1 === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return num1 / num2 ;
}
module.exports = { id: 'dividir', fn: dividir };