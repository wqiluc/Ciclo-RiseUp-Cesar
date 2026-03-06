// Como substituir e fatiar um texto em JavaScript?

// Substituindo um texto:
let texto = "Olá, mundo!";
let novoTexto = texto.replace("mundo", "JavaScript");
console.log(novoTexto); // Saída: "Olá, JavaScript!"

// Fatiando um texto:
let frase = "JavaScript é uma linguagem de programação.";
let parteFrase = frase.slice(0, 10);
console.log(parteFrase); // Saída: "JavaScript"

// Outra forma de fatiar usando substring:
let outraParteFrase = frase.substring(11, 22);
console.log(outraParteFrase); // Saída: "é uma linguagem"

// extraindo de trás pra frente usando slice:
let parteFraseReversa = frase.slice(-12);
console.log(parteFraseReversa); // Saída: "programação."

// usando o método: 'trim()' para remover espaços em branco:
let textoComEspacos = "   Olá, mundo!   ";
let textoLimpo = textoComEspacos.trim();
console.log(textoLimpo); // Saída: "Olá, mundo!"