const calcularSomatorio = require('../funcoes/somatorio');

test('soma de 10 e 20 é 30', () => {
    expect(calcularSomatorio([10, 20])).toBe(30);
});

test('soma de -10 e 20 é 10', () => {
    expect(calcularSomatorio([-10, 20])).toBe(10);
});
