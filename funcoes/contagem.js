/**
 * Conta quantos valores estão entre o primeiro elemento (inclusive)
 * e a quantidade de elementos N (inclusive).
 * @param {number[]} numeros - Array de números.
 * @returns {number} Quantidade de valores dentro do intervalo.
 * @throws {TypeError} Se não for um array de números válidos.
 * @throws {RangeError} Se o array estiver vazio.
 */
function contarValoresNoIntervalo(numeros) {
    if (!Array.isArray(numeros)) {
        throw new TypeError("Os valores devem ser informados em um array.");
    }
    if (numeros.length === 0) {
        throw new RangeError("O array não pode estar vazio.");
    }
    if (!numeros.every((valor) => Number.isFinite(valor))) {
        throw new TypeError("Todos os valores devem ser números válidos.");
    }

    const limiteInferior = numeros[0];
    const limiteSuperior = numeros.length;
    let quantidade = 0;

    for (const valor of numeros) {
        if (valor >= limiteInferior && valor <= limiteSuperior) {
            quantidade++;
        }
    }

    return quantidade;
}

module.exports = contarValoresNoIntervalo;