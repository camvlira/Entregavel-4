/**
 * Verifica se um número inteiro é primo.
 * @param {number} numero - Número inteiro a ser testado.
 * @returns {boolean} true se for primo, false caso contrário.
 * @throws {TypeError} Se o valor não for um número inteiro.
 */
function ehPrimo(numero) {
    if (!Number.isInteger(numero)) {
        throw new TypeError("O valor informado deve ser um número inteiro.");
    }

    if (numero < 2) {
        return false;
    }

    for (let divisor = 2; divisor * divisor <= numero; divisor++) {
        if (numero % divisor === 0) {
            return false;
        }
    }

    return true;
}

module.exports = ehPrimo;
