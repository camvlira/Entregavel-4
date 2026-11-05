const quicksort = require('../funcoes/quicksort');

test('ordena [9, -2, 7, 0, 3] como [-2, 0, 3, 7, 9]', () => {
    expect(quicksort([9, -2, 7, 0, 3])).toEqual([-2, 0, 3, 7, 9]);
});

test('ordena [6, 6, 1, 6] como [1, 6, 6, 6]', () => {
    expect(quicksort([6, 6, 1, 6])).toEqual([1, 6, 6, 6]);
});

// test('lança erro se receber null', () => {
//     expect(() => quicksort(null)).toThrow(TypeError);
// });