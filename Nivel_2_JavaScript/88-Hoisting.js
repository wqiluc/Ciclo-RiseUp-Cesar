/*
========================================
🏗️ HOISTING EM JAVASCRIPT 
========================================

Hoisting significa "içamento" ou "elevação". 🏗️

No JavaScript, antes do código ser executado,
o motor (como o V8 do Node.js ou do navegador)
faz uma leitura prévia do arquivo.

Durante essa leitura: 📖

- Declarações de variáveis são "elevadas"
- Declarações de funções são "elevadas"

Mas atenção ⚠️:
👉 Apenas as DECLARAÇÕES sobem.
👉 A ATRIBUIÇÃO não sobe.

----------------------------------------
🧠 COMO O JS LÊ O CÓDIGO?
----------------------------------------

O JavaScript executa em duas fases:

1️⃣ Fase de criação (memória é preparada); e
2️⃣ Fase de execução (linha por linha).

É na fase de criação que acontece o hoisting.
*/

/*
========================================
📌 HOISTING COM VAR:
========================================
*/

console.log(nome); 
// undefined

var nome = "Lucas";

/*
O que aconteceu?

Internamente o JS leu assim:

var nome;           // sobe
console.log(nome);  // undefined
nome = "Lucas";     // atribuição acontece depois

⚠️ Importante:
var é içado e inicializado como undefined.
*/

/*
========================================
📌 HOISTING COM LET:
========================================
*/

console.log(idade); 
// ReferenceError

let idade = 25;

/*
let também sofre hoisting,
MAS NÃO é inicializado automaticamente.

Ele fica na chamada:

🚫 Temporal Dead Zone (TDZ)

A TDZ é o período entre o início do escopo
até a linha onde a variável é declarada.

Durante a TDZ, você NÃO pode acessar a variável.

Resumo:
var  -> sobe como undefined
let  -> sobe, mas fica inacessível
*/


/*
========================================
📌 HOISTING COM CONST
========================================
*/

console.log(pais);
// ReferenceError

const pais = "Brasil";

/*
const funciona igual ao let no hoisting.

Também entra na Temporal Dead Zone.

Diferença:
const precisa obrigatoriamente
receber valor na declaração.
*/


/*
========================================
📌 HOISTING COM FUNÇÕES
========================================
*/

saudacao();

function saudacao() {
    console.log("Olá!");
}

/*
Funções declaradas com:

function nome() {}

São completamente içadas.

Isso significa que você pode chamá-las
antes mesmo da declaração no código.
*/

/*
========================================
📌 HOISTING COM FUNCTION EXPRESSION
========================================
*/

teste();

// ERRO

var teste = function() {
    console.log("Testando");
};

/*
Aqui NÃO funciona. ❌ Por quê?

Porque isso é uma variável recebendo uma função.

Internamente o JS faz:

var teste;   // sobe como undefined
teste();     // undefined() -> erro
teste = function() {...}

Ou seja:
A variável sobe,
mas a função NÃO.
*/

/*
========================================
📌 RESUMÃO FINAL
========================================

🔹 var
- Sofre hoisting
- Inicializa como undefined

🔹 let
- Sofre hoisting
- Fica na Temporal Dead Zone

🔹 const
- Igual ao let
- Precisa de valor na declaração

🔹 function declaration
- Sobe completamente

🔹 function expression
- Só a variável sobe

----------------------------------------
🎯 DICA PARA ENTENDER HOISTING

Sempre imagine que o JavaScript
reescreve seu código assim:

1️⃣ Declara tudo primeiro
2️⃣ Depois executa linha por linha

Se você entender isso,
nunca mais erra hoisting 🚀
*/