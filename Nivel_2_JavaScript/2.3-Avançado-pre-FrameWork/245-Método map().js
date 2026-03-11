// O método map() é usado para percorrer um array
// e criar um NOVO array a partir do original.

// Ele executa uma função para cada elemento
// do array e retorna um novo array com os resultados.

// Sintaxe básica:
// array.map((elemento, indice, arrayOriginal) => { ... })

// ------------------------------------------
// Exemplo 1: Dobrar números de um array:
// ------------------------------------------

const numeros = [1, 2, 3, 4, 5];

// map percorre cada número do array
// e retorna um novo valor para cada item
const dobrados = numeros.map(function(numero) {
  return numero * 2;
});

// Resultado: [2, 4, 6, 8, 10]
console.log(dobrados);

// O array original NÃO é alterado
console.log(numeros);


// ------------------------------------------
// Exemplo 2: Usando Arrow Function:
// ------------------------------------------

const quadrados = numeros.map(numero => numero * numero);

// Resultado: [1, 4, 9, 16, 25]
console.log(quadrados);


// ------------------------------------------
// Exemplo 3: Transformando dados:
// ------------------------------------------

const pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "Carlos", idade: 25 },
  { nome: "Maria", idade: 30 }
];

// Criando um novo array apenas com os nomes
const nomes = pessoas.map(pessoa => pessoa.nome);

// Resultado: ["Ana", "Carlos", "Maria"]
console.log(nomes);


// ------------------------------------------
// Parâmetros da função do map
// ------------------------------------------

// elemento -> valor atual do array
// indice -> posição do elemento
// array -> array original

numeros.map((elemento, indice) => {
  console.log(`Valor: ${elemento}, Índice: ${indice}`);
});