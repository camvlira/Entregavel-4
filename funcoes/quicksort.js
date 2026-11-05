/**
 * Ordena um array de números em ordem crescente usando Quicksort.
 * Não modifica o array original.
 * @param {number[]} numeros - Array de números finitos.
 * @returns {number[]} Novo array ordenado.
 * @throws {TypeError} Se o argumento não for um array ou tiver elementos que não são números.
 */
function quicksort(numeros) {
    if (!Array.isArray(numeros)) {
        throw new TypeError("O argumento deve ser um array.");
    }

    if (!numeros.every((item) => Number.isFinite(item))) {
        throw new TypeError("O array deve conter apenas números válidos.");
    }

    return ordenar(numeros);
}

function ordenar(numeros) {
    if (numeros.length <= 1) {
        return numeros;
    }

    const pivo = numeros[Math.floor(numeros.length / 2)];
    const menores = numeros.filter((numero) => numero < pivo);
    const iguais = numeros.filter((numero) => numero === pivo);
    const maiores = numeros.filter((numero) => numero > pivo);

    return [...ordenar(menores), ...iguais, ...ordenar(maiores)];
}

module.exports = quicksort;
