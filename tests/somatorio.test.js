const calcularSomatorio = require('../funcoes/somatorio');

test('soma de 5, 15 e 25 é 45', () => {
    expect(calcularSomatorio([5, 15, 25])).toBe(45);
});

test('soma de array vazio é 0', () => {
    expect(calcularSomatorio([])).toBe(0);
});

// test('lança erro com NaN no array', () => {
//     expect(() => calcularSomatorio([1, NaN])).toThrow(TypeError);
// });