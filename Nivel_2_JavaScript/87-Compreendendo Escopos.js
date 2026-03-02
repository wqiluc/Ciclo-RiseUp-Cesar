/*
====================================================
📦 ESCOPO EM JAVASCRIPT — GUIA COMPLETO ✅☕️
====================================================

📌 Escopo é o "lugar" onde uma variável vive.
Ou seja: define ONDE ela pode ser acessada.

Imagine que cada escopo é como um quarto 🏠:
Se você guarda algo dentro dele,
só quem está naquele quarto consegue usar.

Tipos principais de escopo:

1️⃣ Escopo Global;
2️⃣ Escopo de Função; e
3️⃣ Escopo de Bloco.

E conceitos importantes:
- var;
- let;
- const;
- Shadowing; e
- Hoisting.
*/


/*
====================================================
🌍 1) ESCOPO GLOBAL
====================================================

Variáveis criadas fora de qualquer função ou bloco
ficam disponíveis em TODO o código.

⚠️ Cuidado: variáveis globais podem causar conflitos.
*/

let linguagem = "JavaScript";

function mostrarLinguagem() {
    console.log("Dentro da função:", linguagem);
}

mostrarLinguagem();
console.log("Fora da função:", linguagem);


/*
🧠 COMO ENTENDER?

Pergunte:
"Essa variável foi declarada fora de tudo?"
Se sim → é GLOBAL 🌎
*/


/*
====================================================
🏠 2) ESCOPO DE FUNÇÃO
====================================================

Variáveis criadas dentro de uma função
SÓ existem dentro dela.

É como um quarto fechado 🔐
*/

function exemploFuncao() {
    let mensagem = "Sou local da função!";
    console.log(mensagem);
}

exemploFuncao();

// console.log(mensagem);
// ❌ ERRO: mensagem não existe fora da função



/*
🧠 REGRA IMPORTANTE:

Funções criam um NOVO ESCOPO.
Tudo que nasce dentro dela,
morre quando ela termina.
*/



/*
====================================================
🧱 3) ESCOPO DE BLOCO
====================================================

Blocos são definidos por { }

Exemplos:
- if
- for
- while
- switch

let e const respeitam bloco.
var NÃO respeita bloco.
*/

if (true) {
    let blocoLet = "Let vive só aqui";
    const blocoConst = "Const também";
    var blocoVar = "Var ignora bloco 😬";
}

// console.log(blocoLet);
// ❌ ERRO

// console.log(blocoConst);
// ❌ ERRO

console.log(blocoVar);
// ✅ Funciona (var ignora bloco)



/*
📌 RESUMO:

var → escopo de FUNÇÃO
let → escopo de BLOCO
const → escopo de BLOCO
*/



/*
====================================================
⚔️ 4) VAR vs LET vs CONST
====================================================
*/

var idade = 18;
var idade = 20; // ✅ pode redeclarar

let ano = 2024;
// let ano = 2025; ❌ erro

const PI = 3.14;
// PI = 3.1415; ❌ erro


/*
🧠 QUANDO USAR?

Use const por padrão 🔒
Use let quando precisar alterar 🔄
Evite var 🚫
*/



/*
====================================================
🪞 5) SHADOWING (SOMBREAMENTO)
====================================================

Quando uma variável interna tem o mesmo nome
de uma externa.
*/

let numero = 100;

function testeShadowing() {
    let numero = 50; // sombra o de fora
    console.log("Dentro:", numero);
}

testeShadowing();
console.log("Fora:", numero);


/*
🧠 IMPORTANTE:

O JavaScript sempre procura:
1️⃣ Primeiro no escopo atual
2️⃣ Depois no escopo externo
3️⃣ Até chegar no global

Isso se chama:
🔎 Escopo Léxico (Lexical Scope)
*/



/*
====================================================
🚀 6) HOISTING
====================================================

Hoisting = "içamento"

O JavaScript move declarações para o topo
ANTES de executar o código.
*/

console.log(testeVar); 
// undefined (não dá erro)

var testeVar = 5;


// console.log(testeLet);
// ❌ ERRO (Temporal Dead Zone)

let testeLet = 10;


/*
📌 O que acontece por trás:

var testeVar;

console.log(testeVar);
testeVar = 5;

let e const são içados,
mas NÃO podem ser usados antes da declaração.
*/



/*
====================================================
🧩 COMO ENTENDER ESCOPOS NA PRÁTICA
====================================================

Sempre faça essas perguntas:

❓ Onde a variável foi declarada?
❓ Está dentro de função?
❓ Está dentro de bloco { }?
❓ Foi criada com var, let ou const?

Dica de ouro ✨
Use console.log para testar acessos.

Se aparecer:
"ReferenceError"
→ Problema de escopo.
*/



/*
====================================================
📚 RESUMÃO FINAL
====================================================

🌍 Global → Existe em todo lugar.
🏠 Função → Existe só dentro da função.
🧱 Bloco → Existe só dentro das chaves.

var → escopo de função + hoisting perigoso 😬
let → escopo de bloco + seguro ✔
const → escopo de bloco + imutável 🔒

Regra moderna🛠️:
Prefira const > let > nunca var 🚀
====================================================
*/