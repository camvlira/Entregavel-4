# Entregável 4

Projeto com os **Algoritmos Fundamentais** da atividade #1 reescritos como funções testáveis. Os testes unitários são escritos com a biblioteca **[Jest](https://jestjs.io/docs/getting-started)**.

## Estrutura do projeto

```
entregavel4/
├── funcoes/
│   ├── contagem.js       # Conta valores entre o 1º elemento e N
│   ├── fibonacci.js      # Gera os N primeiros termos de Fibonacci
│   ├── mdc.js            # Máximo Divisor Comum (algoritmo de Euclides)
│   ├── numeroprimo.js    # Verifica se um número é primo
│   ├── quicksort.js      # Ordena um array com Quicksort
│   └── somatorio.js      # Soma os números de um array
├── tests/
│   ├── contagem.test.js
│   ├── fibonacci.test.js
│   ├── mdc.test.js
│   ├── numeroprimo.test.js
│   ├── quicksort.test.js
│   └── somatorio.test.js
├── package.json
├── package-lock.json
└── README.md
```

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (o npm vem junto).

Para conferir, rode no terminal:

```bash
node --version
npm --version
```

## Como rodar o projeto

Abra o terminal na pasta do projeto (no VS Code: **Ctrl + '**) e rode:

```bash
npm install
npm test
```

- `npm install` baixa o Jest e as demais dependências listadas no `package.json` (cria a pasta `node_modules`).
- `npm test` executa todos os testes da pasta `tests`.

### Resultado esperado

```
 PASS  tests/contagem.test.js
  √ [3, 8, 4, 2, 6, 5] tem 4 valores entre 3 e 6
  √ [1, 1, 1] tem 3 valores entre 1 e 3
 PASS  tests/fibonacci.test.js
  ...

Test Suites: 6 passed, 6 total
Tests:       12 passed, 12 total
```

Para conferir a versão do Jest instalada:

```bash
npx jest --version
```

## Como o projeto foi configurado (passo a passo)

Esses passos já foram feitos neste projeto. Ficam registrados aqui para quem quiser montar do zero.

**1. Criar o `package.json`**

```bash
npm init -y
```

**2. Instalar o Jest como dependência de desenvolvimento**

```bash
npm install --save-dev jest
```

**3. Configurar o comando `npm test`**

No `package.json`, deixe a parte `"scripts"` assim:

```json
"scripts": {
  "test": "jest --verbose"
}
```

O `--verbose` mostra cada teste individualmente com ✓ (ou ✗ quando falha).

## Como funciona um teste

Cada arquivo em `tests/` importa uma função de `funcoes/` e compara o resultado com o valor esperado:

```js
const calcularMdc = require('../funcoes/mdc');

test('MDC de 48 e 36 é 12', () => {
    expect(calcularMdc(48, 36)).toBe(12);
});
```

- `toBe` compara valores simples (números, booleanos).
- `toEqual` compara arrays e objetos.
- `toThrow` verifica se a função lança um erro com entrada inválida.

Para que o teste consiga importar a função, cada arquivo de `funcoes/` termina com `module.exports = nomeDaFuncao;`.
