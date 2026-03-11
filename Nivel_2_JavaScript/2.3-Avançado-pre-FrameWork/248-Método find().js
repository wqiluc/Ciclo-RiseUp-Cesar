// O método find() é usado para percorrer um array
// e retornar o PRIMEIRO elemento que satisfaz
// uma determinada condição.

// Diferente do findIndex(), que retorna o índice,
// o find() retorna o próprio ELEMENTO.

// Se nenhum elemento atender à condição,
// o método retorna undefined.

// Sintaxe básica:
// array.find((elemento, indice, arrayOriginal) => { condição })

// ------------------------------------------
// Exemplo 1: Encontrar um número:
// ------------------------------------------

const numeros = [10, 20, 30, 40, 50];

// Procura o primeiro número maior que 25
const numeroEncontrado = numeros.find(function(numero) {
  return numero > 25;
});

// Resultado: 30
console.log(numeroEncontrado);

// ------------------------------------------
// Exemplo 2: Usando Arrow Function:
// ------------------------------------------

const resultado = numeros.find(numero => numero === 40);

// Resultado: 40
console.log(resultado);

// ------------------------------------------
// Exemplo 3: Procurando em objetos:
// ------------------------------------------

const pessoas = [
  { nome: "Ana", idade: 18 },
  { nome: "Carlos", idade: 25 },
  { nome: "Maria", idade: 30 }
];

// Encontrando a pessoa chamada "Carlos"
const pessoa = pessoas.find(pessoa => pessoa.nome === "Carlos");

// Resultado:
// { nome: "Carlos", idade: 25 }
console.log(pessoa);

// ------------------------------------------
// Quando o valor não é encontrado ❌
// ------------------------------------------

const naoEncontrado = numeros.find(numero => numero > 100);

// Resultado: undefined
console.log(naoEncontrado);

// ------------------------------------------
// Parâmetros da função:
// ------------------------------------------

// elemento -> valor atual do array
// indice -> posição do elemento
// array -> array original

numeros.find((elemento, indice) => {
  console.log(`Valor: ${elemento}, Índice: ${indice}`);
  return elemento === 30;
});