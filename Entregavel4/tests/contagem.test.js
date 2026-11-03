const contarAprovacoes = require('../funcoes/contagem');

test('conta 2 aprovações em [70, 50, 30] com mínimo 50', () => {
    expect(contarAprovacoes([70, 50, 30], 50)).toBe(2);
});

test('nenhuma aprovação quando todas as notas estão abaixo do mínimo', () => {
    expect(contarAprovacoes([10, 20, 30], 50)).toBe(0);
});
