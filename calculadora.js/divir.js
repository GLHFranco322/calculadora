function dividir() {
    if (2 === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return 2 / 8 ;
}
module.exports = dividir;