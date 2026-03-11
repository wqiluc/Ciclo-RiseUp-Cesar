// O método findIndex() é usado para percorrer um array
// e retornar o ÍNDICE do primeiro elemento que satisfaz
// uma determinada condição.

// Se nenhum elemento atender à condição,
// o método retorna -1.

// Sintaxe básica:
// array.findIndex((elemento, indice, arrayOriginal) => { condição })

// ------------------------------------------
// Exemplo 1: Encontrar o índice de um número:
// ------------------------------------------

const numeros = [10, 20, 30, 40, 50];

// Procura o primeiro número maior que 25
const indice = numeros.findIndex(function(numero) {
  return numero > 25;
});

// Resultado: 2 (posição do número 30)
console.log(indice);

// ------------------------------------------
// Exemplo 2: Usando Arrow Function:
// ------------------------------------------

const indiceNumero = numeros.findIndex(numero => numero === 40);

// Resultado: 3
console.log(indiceNumero);

// ------------------------------------------
// Exemplo 3: Procurando em objetos:
// ------------------------------------------

const pessoas = [
  { nome: "Ana", idade: 18 },
  { nome: "Carlos", idade: 25 },
  { nome: "Maria", idade: 30 }
];

// Encontrando o índice da pessoa chamada "Carlos"
const indicePessoa = pessoas.findIndex(pessoa => pessoa.nome === "Carlos");

// Resultado: 1
console.log(indicePessoa);

// ------------------------------------------
// Quando o valor não é encontrado ❌
// ------------------------------------------

const resultado = numeros.findIndex(numero => numero > 100);

// Resultado: -1 (nenhum número maior que 100)
console.log(resultado);

// ------------------------------------------
// Parâmetros da função:
// ------------------------------------------

// elemento -> valor atual do array
// indice -> posição do elemento
// array -> array original

numeros.findIndex((elemento, indice) => {
  console.log(`Valor: ${elemento}, Índice: ${indice}`);
  return elemento === 30;
});