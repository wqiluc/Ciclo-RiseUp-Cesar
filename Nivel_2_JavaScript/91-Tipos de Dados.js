/*
========================================
📦 TIPOS DE DADOS EM JAVASCRIPT
========================================

Tipos de dados são os "formatos" das informações
que podemos guardar nas variáveis 📦.

Em JavaScript existem 2 grandes grupos:

1️⃣ Tipos Primitivos; e
2️⃣ Tipos de Referência.

Vamos entender cada um 🚀
*/

/*
========================================
🧠 1) TIPOS PRIMITIVOS
========================================

São dados simples.
Guardam um único valor diretamente na memória.

Os principais são:

- string
- number
- boolean
- undefined
- null
- bigint
- symbol
*/

/*
========================================
📝 STRING (texto)
========================================

Representa textos 📚
Pode usar:
- ""
- ''
- `` (template string)
*/

let nome = "Lucas";
let sobrenome = 'Paguetti';
let mensagem = `Olá, ${nome}! 👋`;

console.log(typeof nome); // string

/*
========================================
🔢 NUMBER (número)
========================================

Representa números inteiros e decimais.
JavaScript NÃO separa int de float.
*/

let idade = 20;
let altura = 1.75;

console.log(typeof idade); // number

// Operações matemáticas 🧮
console.log(10 + 5);
console.log(10 * 2);

/*
========================================
✅❌ BOOLEAN (verdadeiro ou falso)
========================================

Muito usado em decisões (if).
*/

let estaLogado = true;
let maiorDeIdade = false;

console.log(typeof estaLogado); // boolean

/*
========================================
❓ UNDEFINED
========================================

Quando a variável foi declarada,
mas ainda NÃO recebeu valor.
*/

let email;
console.log(email); // undefined
console.log(typeof email); // undefined


/*
========================================
🚫 NULL
========================================

Representa ausência INTENCIONAL de valor.
*/

let telefone = null;
console.log(typeof telefone); 
// ⚠️ curiosidade: retorna "object" (bug histórico 😅)


/*
========================================
🔢 BIGINT
========================================

Usado para números MUITO grandes.
*/

let numeroGigante = 1234567890123456789012345678901234567890n;
console.log(typeof numeroGigante); // bigint


/*
========================================
🎯 SYMBOL
========================================

Cria identificadores únicos.
Pouco usado no dia a dia.
*/

let id = Symbol("id");
console.log(typeof id); // symbol

/*
========================================
🧱 2) TIPOS DE REFERÊNCIA
========================================

Não guardam o valor diretamente.
Guardam uma REFERÊNCIA na memória 🧠.

Principais:
- object;
- array; e
- function.
*/

/*
========================================
📦 OBJECT (objeto)
========================================

Coleção de propriedades (chave: valor)
*/

let usuario = {
    nome: "Lucas",
    idade: 20,
    ativo: true
};

console.log(typeof usuario); // object
console.log(usuario.nome);

/*
========================================
📚 ARRAY (lista)
========================================

Tipo especial de objeto.
Guarda múltiplos valores em ordem.
*/

let frutas = ["maçã 🍎", "banana 🍌", "uva 🍇"];

console.log(typeof frutas); // object
console.log(frutas[0]);

/*
========================================
⚙️ FUNCTION (função):
========================================

Funções também são objetos!
*/

function saudacao() {
    return "Olá! 👋";
}

console.log(typeof saudacao); // function

/*
========================================
🧪 COMO DESCOBRIR O TIPO?
========================================

Usamos o operador:
typeof
*/

let teste = 123;

console.log(typeof teste); // number

/*
========================================
⚡️ DIFERENÇA IMPORTANTE:
========================================

1. PRIMITIVOS: 1️⃣
- string;
- number;
- boolean;
- undefined;
- null;
- bigint; e
- symbol.

👉 São copiados por VALOR.

2, OBJETOS: 2️⃣
- object;
- array; e
- function.

👉 São copiados por REFERÊNCIA.📨

Exemplo 👇
*/

let a = 10;
let b = a;

b = 20;

console.log(a); // 10 (não mudou)


let obj1 = { nome: "Lucas" };
let obj2 = obj1;

obj2.nome = "Carlos";

console.log(obj1.nome); 
// 😱 Mudou! Porque aponta para o mesmo lugar na memória

/*
========================================
📊 RESUMÃO FINAL
========================================

PRIMITIVOS 🧠
✅ Simples;
✅ Copiados por valor;
✅ Mais leves.

REFERÊNCIA 🧱
✅ Mais complexos;
✅ Copiados por referência;
✅ Guardam múltiplos valores.

========================================
🚀 DICA PROFISSIONAL:
========================================

Sempre entenda:

- Se é primitivo → copia valor✅; e
- Se é objeto → copia referência✅.

*/