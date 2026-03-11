// O método every() é usado para verificar
// se TODOS os elementos de um array
// atendem a uma determinada condição.

// Ele retorna:
// true -> se todos os elementos passarem na condição✅;
// false -> se pelo menos um elemento não passar❌.

// Sintaxe básica:
// array.every((elemento, indice, arrayOriginal) => { condição })

// ------------------------------------------
// Exemplo 1: Verificar se todos os números são positivos✅:
// ------------------------------------------

const numeros = [5, 10, 15, 20];

const todosPositivos = numeros.every(function(numero) {
  return numero > 0;
});

// Resultado: true
console.log(todosPositivos);

// ------------------------------------------
// Exemplo 2: Usando Arrow Function🏹:
// ------------------------------------------

const menoresQue50 = numeros.every(numero => numero < 50);

// Resultado: true
console.log(menoresQue50);

// ------------------------------------------
// Exemplo 3: Quando um elemento não atende a condição ❌:
// ------------------------------------------

const valores = [10, 20, -5, 30];

const todosPositivos2 = valores.every(numero => numero > 0);

// Resultado: false (porque existe -5)
console.log(todosPositivos2);

// ------------------------------------------
// Exemplo 4: Usando com objetos:
// ------------------------------------------

const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Carlos", nota: 7 },
  { nome: "Maria", nota: 9 }
];

// Verificando se todos os alunos passaram (nota >= 7)
const todosAprovados = alunos.every(aluno => aluno.nota >= 7);

// Resultado: true
console.log(todosAprovados);


// ------------------------------------------
// Parâmetros da função:
// ------------------------------------------

// elemento -> valor atual do array;
// indice -> posição do elemento;
// array -> array original;

numeros.every((elemento, indice) => {
  console.log(`Valor: ${elemento}, Índice: ${indice}`);
  return elemento > 0;
});