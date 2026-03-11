// O método filter() é usado para percorrer um array
// e retornar um NOVO array apenas com os elementos
// que passam em uma condição.

// Diferente do map(), que transforma valores,
// o filter() serve para FILTRAR elementos.

// Sintaxe básica:
// array.filter((elemento, indice, arrayOriginal) => { condição })

// ------------------------------------------
// Exemplo 1: Filtrar números maiores que 5:
// ------------------------------------------

const numeros = [2, 4, 6, 8, 10];

// filter percorre cada elemento do array
// e mantém apenas os que retornarem true
const maioresQueCinco = numeros.filter(function(numero) {
  return numero > 5;
});

// Resultado: [6, 8, 10]
console.log(maioresQueCinco);

// O array original não é alterado
console.log(numeros);


// ------------------------------------------
// Exemplo 2: Usando Arrow Function:
// ------------------------------------------

const pares = numeros.filter(numero => numero % 2 === 0);

// Resultado: [2, 4, 6, 8, 10]
console.log(pares);

// ------------------------------------------
// Exemplo 3: Filtrando objetos:
// ------------------------------------------

const pessoas = [
  { nome: "Ana", idade: 17 },
  { nome: "Carlos", idade: 22 },
  { nome: "Maria", idade: 30 },
  { nome: "João", idade: 15 }
];

// Filtrando apenas pessoas maiores de idade
const maioresDeIdade = pessoas.filter(pessoa => pessoa.idade >= 18);

// Resultado:
// [
//   { nome: "Carlos", idade: 22 },
//   { nome: "Maria", idade: 30 }
// ]
console.log(maioresDeIdade);

// ------------------------------------------
// Parâmetros da função do filter:
// ------------------------------------------

// elemento -> valor atual do array
// indice -> posição do elemento
// array -> array original

numeros.filter((elemento, indice) => {
  console.log(`Valor: ${elemento}, Índice: ${indice}`);
  return elemento > 3;
});