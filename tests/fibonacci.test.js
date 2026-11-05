const gerarFibonacci = require('../funcoes/fibonacci');

test('os 7 primeiros termos são 0, 1, 1, 2, 3, 5, 8', () => {
    expect(gerarFibonacci(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
});

test('com 1 termo retorna apenas 0', () => {
    expect(gerarFibonacci(1)).toEqual([0]);
});

// test('lança erro com quantidade decimal', () => {
//     expect(() => gerarFibonacci(3.5)).toThrow(TypeError);
// });