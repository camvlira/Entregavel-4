/**
 * Conta quantas notas são maiores ou iguais à nota mínima de aprovação.
 * @param {number[]} notas - Array de notas.
 * @param {number} [notaMinima=50] - Nota mínima para aprovação.
 * @returns {number} Quantidade de aprovações.
 * @throws {TypeError} Se as notas não forem um array de números ou a nota mínima não for número.
 */
function contarAprovacoes(notas, notaMinima = 50) {
    if (!Array.isArray(notas)) {
        throw new TypeError("As notas devem ser informadas em um array.");
    }

    if (!Number.isFinite(notaMinima)) {
        throw new TypeError("A nota mínima deve ser um número válido.");
    }

    let quantidadeAprovacoes = 0;

    for (const nota of notas) {
        if (!Number.isFinite(nota)) {
            throw new TypeError("Todas as notas devem ser números válidos.");
        }
        if (nota >= notaMinima) {
            quantidadeAprovacoes++;
        }
    }

    return quantidadeAprovacoes;
}

module.exports = contarAprovacoes;
