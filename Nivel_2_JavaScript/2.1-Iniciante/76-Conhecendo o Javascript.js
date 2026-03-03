/*
===========================================================
🚀 O QUE É JAVASCRIPT?
===========================================================

JavaScript é uma linguagem de programação criada em 1995
por Brendan Eich 📜.

Ela foi desenvolvida para rodar no navegador e permitir
interatividade nas páginas web 🌐.

Hoje o JavaScript é usado para:

🌍 Desenvolvimento Web (Frontend);
🖥 Desenvolvimento Backend (Node.js);
📱 Aplicações Mobile;
🧠 Inteligência Artificial;
🎮 Jogos;
🔗 APIs;
⚙️ Automações;
📊 Dashboards;
🗄 Manipulação de Banco de Dados.
etc

Ele é uma linguagem:

✅ Interpretada;
✅ Dinâmica;
✅ Multiparadigma (POO + Funcional);
✅ Baseada em protótipos;
✅ Assíncrona.

===========================================================
📦 COMO O JAVASCRIPT FUNCIONA?
===========================================================

No navegador:

HTML → Estrutura 🏛️
CSS → Estilo 🎨
JavaScript → Comportamento 🧠

O JavaScript manipula o DOM (Document Object Model)
para alterar elementos da página dinamicamente.

===========================================================
📌 PRINCIPAIS FUNCIONALIDADES
===========================================================
*/

/*
===========================================================
1️⃣ VARIÁVEIS
===========================================================

Variáveis armazenam valores na memória.

let → pode mudar
const → não pode mudar
var → antigo (evitar 🚫)
*/

let nome = "Lucas";
const curso = "JavaScript";
var versao = "ES6";

console.log("Aluno:", nome);


/*
===========================================================
2️⃣ TIPOS DE DADOS
===========================================================

📝 String
🔢 Number
✔ Boolean
📦 Object
📚 Array
🚫 Null
❓ Undefined
*/

let linguagem = "JavaScript";
let ano = 2026;
let ativo = true;
let nada = null;
let indefinido;

let aluno = {
    nome: "Lucas",
    idade: 20
};

let tecnologias = ["HTML", "CSS", "JS"];


/*
===========================================================
3️⃣ OPERADORES
===========================================================

➕ Soma
➖ Subtração
✖ Multiplicação
➗ Divisão
=== Igualdade estrita
!== Diferente
*/

let a = 10;
let b = 5;

console.log("Soma:", a + b);
console.log("Multiplicação:", a * b);


/*
===========================================================
4️⃣ CONDICIONAIS
===========================================================

Tomada de decisão 🧠
*/

let nota = 8;

if (nota >= 7) {
    console.log("✅ Aprovado");
} else if (nota >= 5) {
    console.log("⚠ Recuperação");
} else {
    console.log("❌ Reprovado");
}


/*
===========================================================
5️⃣ LOOPS
===========================================================

Repetição de código 🔁
*/

for (let i = 0; i < 3; i++) {
    console.log("Número:", i);
}

let contador = 0;
while (contador < 3) {
    console.log("While:", contador);
    contador++;
}


/*
===========================================================
6️⃣ FUNÇÕES
===========================================================

Blocos reutilizáveis de código 📦
*/

function saudacao(nome) {
    return `Olá, ${nome}! 👋`;
}

console.log(saudacao("Lucas"));


// Arrow Function (ES6 🚀)

const soma = (x, y) => x + y;

console.log("Resultado:", soma(5, 3));


/*
===========================================================
7️⃣ OBJETOS
===========================================================

Estrutura chave: valor 🗝
*/

let pessoa = {
    nome: "Lucas",
    idade: 20,
    falar() {
        console.log("Olá, mundo! 🌎");
    }
};

pessoa.falar();


/*
===========================================================
8️⃣ ARRAYS
===========================================================

Lista de valores 📚
*/

let linguagens = ["HTML", "CSS", "JS"];

linguagens.push("TypeScript");

console.log(linguagens.length);
console.log(linguagens[0]);


/*
===========================================================
9️⃣ MANIPULAÇÃO DO DOM
===========================================================

Permite alterar HTML via JavaScript 🌐

Exemplo (funciona no navegador):
*/

// document.querySelector("h1").innerText = "Novo Título 🚀";


/*
===========================================================
🔟 EVENTOS
===========================================================

Interação com usuário 🖱
*/

// document.querySelector("button")
//     .addEventListener("click", () => {
//         alert("Botão clicado! 🎉");
//     });


/*
===========================================================
1️⃣1️⃣ ASYNC / AWAIT
===========================================================

JavaScript trabalha de forma assíncrona ⏳

Muito usado para APIs.
*/

async function buscarDados() {
    try {
        let resposta = await fetch("https://api.exemplo.com");
        let dados = await resposta.json();
        console.log("Dados:", dados);
    } catch (erro) {
        console.log("Erro:", erro);
    }
}


/*
===========================================================
1️⃣2️⃣ POR QUE JAVASCRIPT É TÃO IMPORTANTE?
===========================================================

🔥 Linguagem padrão da Web
🌎 Funciona em todos os navegadores
📦 Ecossistema gigante (React, Vue, Node)
💼 Alta demanda no mercado
🚀 Possibilidade de Full Stack
📱 Desenvolvimento Mobile
🖥 Desenvolvimento Backend

===========================================================
📚 RESUMÃO FINAL:
===========================================================

JavaScript é usado para:

🌐 Criar sites interativos;
🖥 Criar servidores;
📱 Criar aplicativos;
🔗 Criar APIs;
⚙ Automatizar tarefas;
🎮 Criar jogos. 

...

Se você aprende JavaScript, você pode trabalhar
com praticamente qualquer área da tecnologia 🚀🔥
*/