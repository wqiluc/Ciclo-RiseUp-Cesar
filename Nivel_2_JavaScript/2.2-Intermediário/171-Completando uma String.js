// Como Mainipular e Completar Strings em JavaScript?

const cartaodeCredito = "1234 5678 9012 3456";

// Completar uma string com caracteres específicos usando padStart()
const cartaodeCreditoMascarado = cartaodeCredito.slice(-4).padStart(cartaodeCredito.length, "*");
console.log(cartaodeCreditoMascarado); // Saída: "**** **** **** 3456"

// fica como uma espécie de mascara/cripto para o numero do cartão de crédito, mostrando apenas os últimos 4 dígitos e ocultando o restante com asteriscos.

// // Completar uma string com caracteres específicos usando padEnd()
const nome = "João";
const nomeCompleto = nome.padEnd(10, " Silva");
console.log(nomeCompleto); // Saída: "João Silva"

// O método padEnd() é usado para completar a string "João" com o texto " Silva" até que a string resultante tenha um comprimento total de 10 caracteres. O resultado é "João Silva".