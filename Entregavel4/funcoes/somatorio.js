/**
 * Calcula a soma de todos os números de um array.
 * @param {number[]} numeros - Array de números finitos.
 * @returns {number} Soma dos elementos (0 para array vazio).
 * @throws {TypeError} Se o argumento não for um array ou tiver elementos que não são números.
 */
function calcularSomatorio(numeros) {
    if (!Array.isArray(numeros)) {
        throw new TypeError("O argumento deve ser um array.");
    }

    let soma = 0;

    for (const numero of numeros) {
        if (!Number.isFinite(numero)) {
            throw new TypeError("O array deve conter apenas números válidos.");
        }
        soma += numero;
    }

    return soma;
}

module.exports = calcularSomatorio;
