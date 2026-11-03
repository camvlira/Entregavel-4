const quicksort = require('../funcoes/quicksort');

test('ordena [5, 4, 3, 1] como [1, 3, 4, 5]', () => {
    expect(quicksort([5, 4, 3, 1])).toEqual([1, 3, 4, 5]);
});

test('ordena [100, 4, 3, 150] como [3, 4, 100, 150]', () => {
    expect(quicksort([100, 4, 3, 150])).toEqual([3, 4, 100, 150]);
});
