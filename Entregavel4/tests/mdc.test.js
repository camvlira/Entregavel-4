const calcularMdc = require('../funcoes/mdc');

test('MDC de 5 e 10 é 5', () => {
    expect(calcularMdc(5, 10)).toBe(5);
});

test('MDC de 1 e 1 é 1', () => {
    expect(calcularMdc(1, 1)).toBe(1);
});
