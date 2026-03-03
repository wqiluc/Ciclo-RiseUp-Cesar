/*
===========================================================
O QUE SÃO VARIÁVEIS EM JAVASCRIPT?
===========================================================

Variáveis são espaços na memória usados para armazenar dados.
Esses dados podem ser números, textos, valores booleanos, objetos, arrays, etc.

Em JavaScript, existem 3 formas principais de declarar variáveis:

- var;
- let; e
- const

===========================================================
1) VAR
===========================================================

Foi a primeira forma de declarar variáveis no JavaScript.

Características:
- Escopo de função (function scope);
- Pode ser redeclarada;
- Pode ser reatribuída;
- Sofre hoisting (é "movida" para o topo do escopo).

Exemplo:
*/

var nome = "Lucas";
var nome = "Pedro"; // Pode redeclarar
nome = "Ana"; // Pode reatribuir

/*
Problema do var:
Ele pode causar comportamentos inesperados por causa do escopo e hoisting.
Por isso, hoje quase não se usa mais.

===========================================================
2) LET
===========================================================

Introduzido no ES6 (ECMAScript 2015).

Características:
- Escopo de bloco (block scope);
- NÃO pode ser redeclarada no mesmo bloco;
- Pode ser reatribuída;
- Também sofre hoisting, mas não pode ser usada antes da declaração.

Exemplo:
*/

let idade = 20;
idade = 21; // Pode reatribuir

// let idade = 30; // ERRO: não pode redeclarar no mesmo bloco

if (true) {
    let cidade = "Recife";
}
// console.log(cidade); // ERRO: cidade só existe dentro do bloco

/*
===========================================================
3) CONST
===========================================================

Também introduzido no ES6.

Características:
- Escopo de bloco;
- NÃO pode ser redeclarada;
- NÃO pode ser reatribuída;
- Deve ser inicializada no momento da declaração.

Exemplo:
*/

const pi = 3.14;

// pi = 3.1415; // ERRO: não pode reatribuir

/*
IMPORTANTE:
Quando usamos const com objetos ou arrays,
não podemos reatribuir a variável,
mas podemos modificar o conteúdo interno.
*/

const pessoa = {
    nome: "Lucas",
    idade: 20
};

pessoa.idade = 21; // Permitido (alterando propriedade)
pessoa.nome = "Pedro"; // Permitido

// pessoa = {}; // ERRO: não pode reatribuir o objeto inteiro

/*
===========================================================
TIPOS DE DADOS QUE AS VARIÁVEIS PODEM ARMAZENAR
===========================================================

1) String  -> Texto
2) Number  -> Números (inteiros e decimais)
3) Boolean -> true ou false
4) Undefined -> Variável declarada mas sem valor
5) Null -> Valor vazio intencional
6) Object -> Objetos
7) Array -> Lista de valores
8) Symbol -> Identificador único
9) BigInt -> Números inteiros muito grandes

===========================================================
EXEMPLOS DE TIPOS
===========================================================
*/

let texto = "JavaScript";      // String
let numero = 10;               // Number
let decimal = 10.5;            // Number
let ativo = true;              // Boolean
let indefinido;                // Undefined
let vazio = null;              // Null

let objeto = { nome: "JS" };   // Object
let lista = [1, 2, 3];         // Array
let simbolo = Symbol("id");    // Symbol
let grande = 9007199254740991n; // BigInt

/*
===========================================================
RESUMO
===========================================================

var  -> Evite usar; escopo de função; pode redeclarar;
let  -> Use quando precisar reatribuir valor;
const -> Use por padrão; mais seguro; não pode reatribuir;

Boa prática moderna:
Sempre use const.
Use let apenas quando precisar mudar o valor.
Evite var.

===========================================================
FIM DO ARQUIVO
===========================================================
*/

console.log("Fim do Arquivo 🚀")