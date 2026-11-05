const contarValoresNoIntervalo = require('../funcoes/contagem');

test('[3, 8, 4, 2, 6, 5] tem 4 valores entre 3 e 6', () => {
    expect(contarValoresNoIntervalo([3, 8, 4, 2, 6, 5])).toBe(4);
});

test('[1, 1, 1] tem 3 valores entre 1 e 3', () => {
    expect(contarValoresNoIntervalo([1, 1, 1])).toBe(3);
});

// test('[1, 1, 1] tem 2 valores entre 1 e 3 (errado de propósito)', () => {
//     expect(contarValoresNoIntervalo([1, 1, 1])).toBe(2);
// });