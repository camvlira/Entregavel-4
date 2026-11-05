const calcularMdc = require('../funcoes/mdc');

test('MDC de 48 e 36 é 12', () => {
    expect(calcularMdc(48, 36)).toBe(12);
});

test('MDC de -20 e 15 é 5', () => {
    expect(calcularMdc(-20, 15)).toBe(5);
});

// test('lança erro com texto', () => {
//     expect(() => calcularMdc('12', 4)).toThrow(TypeError);
// });