# Atividade 4 — Testes unitários dos algoritmos fundamentais

Projeto desenvolvido em JavaScript com testes unitários utilizando a biblioteca Jest.

## Estrutura do projeto

```text
atividade4_ambientes-main/
├── funcoes/
│   ├── contagem.js
│   ├── fibonacci.js
│   ├── mdc.js
│   ├── numeroprimo.js
│   ├── quicksort.js
│   └── somatorio.js
├── tests/
│   ├── contagem.test.js
│   ├── fibonacci.test.js
│   ├── mdc.test.js
│   ├── numeroprimo.test.js
│   ├── quicksort.test.js
│   └── somatorio.test.js
├── .gitignore
├── package.json
└── README.md
```

## Requisitos

- Node.js e npm instalados.
- Conexão com a internet na primeira instalação das dependências.

## Como instalar

Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

## Como executar os testes

Depois da instalação, execute:

```bash
npm test
```

O Jest localizará automaticamente os arquivos com o padrão `*.test.js` dentro da pasta `tests` e exibirá o resultado de cada teste.

## Testes implementados

Cada algoritmo possui pelo menos dois testes:

| Algoritmo | Testes |
|---|---:|
| Contagem de aprovações | 2 |
| Sequência de Fibonacci | 2 |
| Máximo Divisor Comum (MDC) | 2 |
| Verificação de número primo | 2 |
| Quicksort | 2 |
| Somatório | 2 |
| **Total** | **12** |

Os testes verificam resultados positivos e/ou negativos para diferentes entradas. No teste de Fibonacci, `toEqual()` compara o conteúdo completo do array esperado.

## Boas práticas aplicadas

As funções utilizam nomes que indicam claramente suas responsabilidades. Também fazem validações de entrada e lançam exceções quando recebem valores inválidos, conforme o caso. O Quicksort retorna um novo array, sem modificar o array original.

## Publicar no GitHub

Para enviar o projeto a um repositório GitHub:

```bash
git init
git add .
git commit -m "Adiciona algoritmos e testes unitários com Jest"
git branch -M main
git remote add origin URL_DO_SEU_REPOSITORIO
git push -u origin main
```

Substitua `URL_DO_SEU_REPOSITORIO` pela URL do repositório criado no GitHub. Se o repositório já estiver configurado, basta executar `git add .`, `git commit -m "Atualiza testes e documentação"` e `git push`.

