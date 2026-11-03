/**
 * Gera os primeiros termos da sequência de Fibonacci.
 * @param {number} quantidadeTermos - Quantidade de termos (inteiro >= 0).
 * @returns {number[]} Array com os termos da sequência.
 * @throws {TypeError} Se a quantidade não for um inteiro.
 * @throws {RangeError} Se a quantidade for negativa.
 */
function gerarFibonacci(quantidadeTermos) {
    if (!Number.isInteger(quantidadeTermos)) {
        throw new TypeError("A quantidade de termos deve ser um número inteiro.");
    }

    if (quantidadeTermos < 0) {
        throw new RangeError("A quantidade de termos não pode ser negativa.");
    }

    const termos = [];
    let termoAtual = 0;
    let proximoTermo = 1;

    for (let i = 0; i < quantidadeTermos; i++) {
        termos.push(termoAtual);
        const soma = termoAtual + proximoTermo;
        termoAtual = proximoTermo;
        proximoTermo = soma;
    }

    return termos;
}

module.exports = gerarFibonacci;
