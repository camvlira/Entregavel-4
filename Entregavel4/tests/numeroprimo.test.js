const ehPrimo = require('../funcoes/numeroprimo');

test('10 não é primo', () => {
    expect(ehPrimo(10)).toBe(false);
});

test('3 é primo', () => {
    expect(ehPrimo(3)).toBe(true);
});
