// Como encontrar conteúdo em uma string em JavaScript?

let mensagem = "Olá, meu nome é Lucas e estou estudando os fundamentos de JavaScript.";

// Obtém a posição da palavra na string
console.log(mensagem.indexOf("Lucas")); // Saída: 16
console.log(mensagem.toWellFormed().indexOf("JavaScript")); // Saída: 58

// Verifica se a palavra existe na string
console.log(mensagem.includes("fundamentos"));
console.log(mensagem.includes("Python"));

// ou, usa um if-else mesmo
if (mensagem.includes("Python")) {
    console.log("A palavra 'Python' foi encontrada na mensagem.");
} else {
    console.log("A palavra 'Python' não foi encontrada na mensagem.");
}