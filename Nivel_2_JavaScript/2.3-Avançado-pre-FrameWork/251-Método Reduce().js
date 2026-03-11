// O método reduce() é usado para percorrer um array
// e reduzir todos os valores a UM único resultado.

// Esse resultado pode ser:
// soma; objeto; string; array; ou qualquer valor.

// Sintaxe básica:
// array.reduce((acumulador, elemento, indice, array) => { ... }, valorInicial)

// ------------------------------------------
// Exemplo 1: Somar números de um array:
// ------------------------------------------

const numeros = [10, 20, 30, 40];

// acumulador começa em 0
const soma = numeros.reduce(function(acumulador, numero) {
  return acumulador + numero;
}, 0);

// Resultado: 100
console.log(soma);

// ------------------------------------------
// Exemplo 2: Usando Arrow Function:
// ------------------------------------------

const soma2 = numeros.reduce((acc, numero) => acc + numero, 0);

console.log(soma2);

// ------------------------------------------
// Exemplo 3: Encontrar o maior número:
// ------------------------------------------

const valores = [5, 12, 8, 20, 3];

const maior = valores.reduce((acc, numero) => {
  if (numero > acc) {
    return numero;
  }
  return acc;
});

console.log(maior); // 20

// ------------------------------------------
// Exemplo 4: Contar elementos:
// ------------------------------------------

const frutas = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"];

const contagem = frutas.reduce((acc, fruta) => {

  // se a fruta já existe no objeto, soma 1
  if (acc[fruta]) {
    acc[fruta]++;
  } else {
    acc[fruta] = 1;
  }

  return acc;

}, {});

console.log(contagem);

// Resultado:
// {
//   maçã: 3,
//   banana: 2,
//   laranja: 1
// }

// ------------------------------------------
// Parâmetros da função:
// ------------------------------------------

// acumulador -> guarda o resultado acumulado;
// elemento -> valor atual do array;
// indice -> posição do elemento;
// array -> array original;

// ------------------------------------------
// Funcionamento passo a passo:
// ------------------------------------------

const exemplo = [1, 2, 3];

const resultado = exemplo.reduce((acc, numero) => {
  console.log(`acc: ${acc}, numero: ${numero}`);
  return acc + numero;
}, 0);

console.log(resultado);