/*
========================================
📦 VARIÁVEIS EM JAVASCRIPT:
========================================

Variáveis são "caixinhas" 📦 onde guardamos informações 
para usar depois no programa.

Em JavaScript, temos 3 formas principais de declarar variáveis:

- var (antiga 👴);
- let (moderna 👍); e
- const (constante 🔒).

Vamos entender cada uma delas 👇
*/

/*
========================================
🧠 COMO NOMEAR VARIÁVEIS?
========================================

✅ Pode:
- Começar com letra;
- Começar com $;
- Começar com _; e
- Usar camelCase (boa prática ⭐).

❌ Não pode:
- Começar com número;
- Usar espaços; e
- Usar palavras reservadas (let, var, const, if, etc).

Exemplos💡:
*/

let nome;          // ✅ Correto;
let idadeUsuario;  // ✅ camelCase 🐫 (recomendado 🚀);
let $preco;        // ✅ permitido;
let _contador;     // ✅ permitido;

// let 1nome;      ❌ ERRO (não pode começar com número)
// let meu nome;   ❌ ERRO (não pode ter espaço)
// let let;        ❌ ERRO (palavra reservada)


/*
========================================
👴 VAR (forma antiga):
========================================

- Pode ser redeclarada
- Pode ser reatribuída
- Tem escopo de função (não respeita bloco {})

⚠️ Hoje quase não se usa mais.
*/

var cidade = "Recife";
var cidade = "São Paulo"; // ✅ pode redeclarar

cidade = "Salvador"; // ✅ pode mudar o valor

console.log(cidade);

/*
⚠️ Problema do var:

Ele NÃO respeita escopo de bloco.
*/

if (true) {
    var teste = "Estou aqui dentro 😬";
}

console.log(teste); 
// 😱 Ainda funciona!
// Porque var ignora o bloco {}

/*
========================================
👍 LET (forma moderna):
========================================

- NÃO pode redeclarar;
- Pode reatribuir;
- Respeita escopo de bloco {}.

👉 É o mais usado hoje para variáveis que mudam.
*/

let idade = 20;
// let idade = 30; ❌ ERRO (não pode redeclarar)

idade = 25; // ✅ Pode mudar o valor

console.log(idade);

/*
Escopo de bloco com let 👇
*/

if (true) {
    let mensagem = "Olá 👋";
    console.log(mensagem); // ✅ funciona aqui dentro
}

// console.log(mensagem); ❌ ERRO
// Porque let respeita o bloco {}

/*
========================================
🔒 CONST (constante):
========================================

- NÃO pode redeclarar;
- NÃO pode reatribuir;
- Precisa ser inicializada na hora;
- Respeita escopo de bloco.

👉 Usamos const quando o valor NÃO deve mudar.
*/

const pi = 3.14;
// pi = 3.1415; ❌ ERRO (não pode alterar)

console.log(pi);

/*
⚠️ IMPORTANTE SOBRE CONST E OBJETOS

Const NÃO permite mudar a referência,
mas permite alterar propriedades internas.
*/

const usuario = {
    nome: "Lucas",
    idade: 20
};

usuario.idade = 21; // ✅ permitido
console.log(usuario);

/*
Mas isso NÃO pode:
*/

// usuario = {}; ❌ ERRO


/*
========================================
📊 RESUMÃO FINAL:
========================================

VAR 👴
✅ Pode redeclarar;
✅ Pode reatribuir;
❌ Não respeita bloco;
🚫 Evitar usar.

LET 👍
❌ Não pode redeclarar;
✅ Pode reatribuir;
✅ Respeita bloco;
⭐ Use quando o valor muda.

CONST 🔒
❌ Não pode redeclarar;
❌ Não pode reatribuir;
✅ Respeita bloco;
⭐ Use quando o valor NÃO muda.


========================================
🚀 DICA PROFISSIONAL:
========================================

Use sempre:

- const por padrão 🔒;
- let apenas quando precisar mudar o valor 👍;
- evite var 👴.

Isso deixa seu código mais seguro e organizado 💎
*/