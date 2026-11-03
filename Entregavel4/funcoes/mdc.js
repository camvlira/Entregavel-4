/**
 * Calcula o Máximo Divisor Comum (MDC) de dois inteiros pelo algoritmo de Euclides.
 * @param {number} primeiroNumero - Primeiro número inteiro.
 * @param {number} segundoNumero - Segundo número inteiro.
 * @returns {number} O MDC (sempre não negativo).
 * @throws {TypeError} Se algum dos valores não for um número inteiro.
 */
function calcularMdc(primeiroNumero, segundoNumero) {
    if (!Number.isInteger(primeiroNumero) || !Number.isInteger(segundoNumero)) {
        throw new TypeError("Os dois valores devem ser números inteiros.");
    }

    let dividendo = Math.abs(primeiroNumero);
    let divisor = Math.abs(segundoNumero);

    while (divisor !== 0) {
        const resto = dividendo % divisor;
        dividendo = divisor;
        divisor = resto;
    }

    return dividendo;
}

module.exports = calcularMdc;
