// Usando o Índice no Array em JavaScript

// Criando um array de frutas
const frutas = ['Maçã', 'Banana', 'Laranja', 'Uva', 'Abacaxi'];

// Acessando elementos do array usando índices
console.log(frutas[0]); // Saída: Maçã
console.log(frutas[1]); // Saída: Banana
console.log(frutas[2]); // Saída: Laranja
console.log(frutas[3]); // Saída: Uva
console.log(frutas[4]); // Saída: Abacaxi

// Tentando acessar um índice que não existe
console.log(frutas[5]); // Saída: undefined

// Modificando um elemento do array usando o índice
frutas[1] = 'Manga';
console.log(frutas); // Saída: ['Maçã', 'Manga', 'Laranja', 'Uva', 'Abacaxi']

// Apagando com splice para evitar deixar undefined
frutas.splice(2, 1); // Remove o elemento no índice 2
console.log(frutas); // Saída: ['Maçã', 'Manga', 'Uva', 'Abacaxi']