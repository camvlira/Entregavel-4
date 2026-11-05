const ehPrimo = require('../funcoes/numeroprimo');

test('29 é primo', () => {
    expect(ehPrimo(29)).toBe(true);
});

test('21 não é primo', () => {
    expect(ehPrimo(21)).toBe(false);
});

// test('lança erro com número decimal', () => {
//     expect(() => ehPrimo(4.5)).toThrow(TypeError);
// });