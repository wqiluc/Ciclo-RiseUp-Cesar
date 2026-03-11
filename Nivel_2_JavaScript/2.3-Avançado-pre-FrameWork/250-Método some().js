// O método some() é usado para verificar
// se PELO MENOS UM elemento de um array
// atende a uma determinada condição.

// Ele retorna:
// true -> se pelo menos um elemento passar na condição;
// false -> se nenhum elemento passar.

// Sintaxe básica:
// array.some((elemento, indice, arrayOriginal) => { condição })

// ------------------------------------------
// Exemplo 1: Verificar se existe número maior que 10:
// ------------------------------------------

const numeros = [2, 5, 8, 12];

const existeMaiorQueDez = numeros.some(function(numero) {
  return numero > 10;
});

// Resultado: true (porque 12 é maior que 10)
console.log(existeMaiorQueDez);

// ------------------------------------------
// Exemplo 2: Usando Arrow Function🏹:
// ------------------------------------------

const temNumeroPar = numeros.some(numero => numero % 2 === 0);

// Resultado: true (existem números pares)
console.log(temNumeroPar);

// ------------------------------------------
// Exemplo 3: Quando nenhum elemento atende a condição❌:
// ------------------------------------------

const valores = [1, 3, 5, 7];

const existePar = valores.some(numero => numero % 2 === 0);

// Resultado: false
console.log(existePar);

// ------------------------------------------
// Exemplo 4: Usando com objetos:
// ------------------------------------------

const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Carlos", nota: 4 },
  { nome: "Maria", nota: 9 }
];

// Verificando se algum aluno foi reprovado (nota < 5)
const temReprovado = alunos.some(aluno => aluno.nota < 5);

// Resultado: true (Carlos tem nota 4)
console.log(temReprovado);

// ------------------------------------------
// Parâmetros da função:
// ------------------------------------------

// elemento -> valor atual do array;
// indice -> posição do elemento;
// array -> array original;

numeros.some((elemento, indice) => {
  console.log(`Valor: ${elemento}, Índice: ${indice}`);
  return elemento > 10;
});