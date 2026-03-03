// ==========================================
// 80 - Pedindo Nome e Idade (Node.js)
// ==========================================

// Importamos o módulo "readline"
// Ele permite ler dados digitados no terminal
const readline = require("readline");

// Criamos uma interface de leitura
// input: o que o usuário digita
// output: onde aparece o texto (terminal)
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

// rl.question faz uma pergunta no terminal
// O primeiro parâmetro é o texto da pergunta
// O segundo é uma função que recebe a resposta
rl.question("Digite seu nome: ", function(nome) {

    // Aqui já temos o nome digitado pelo usuário

    // Fazemos outra pergunta, agora pedindo a idade
    rl.question("Digite sua idade: ", function(idade) {

        // idade também vem como texto (string)

        // Mostramos a mensagem no terminal
        // Usamos Template String para inserir variáveis
        console.log(`Olá ${nome}, você tem ${idade} anos.`);

        // Encerramos a interface
        // Se não fechar, o terminal fica esperando
        rl.close();
    });

});