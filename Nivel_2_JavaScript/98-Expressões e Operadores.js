/*
========================================
📘 EXPRESSÕES E OPERADORES NO JAVASCRIPT
========================================

JavaScript é uma linguagem baseada em EXPRESSÕES.

📌 EXPRESSÃO:
É qualquer coisa que gera (retorna) um valor.

Exemplos:
2 + 2
"Olá"
true
idade > 18
*/

////////////////////////////////////////
// 🔹 1️⃣ EXPRESSÕES
////////////////////////////////////////

/*
Expressão aritmética:
*/
let resultado = 10 + 5; // 15

/*
Expressão de comparação:
*/
let comparacao = 10 > 5; // true

/*
Expressão lógica:
*/
let logica = true && false; // false

/*
Expressão de atribuição:
*/
let nome = "Lucas";

/*
Expressão de função:
*/
const soma = function(a, b) {
  return a + b;
};

////////////////////////////////////////
// 🔹 2️⃣ OPERADORES ARITMÉTICOS
////////////////////////////////////////

/*
Usados para cálculos matemáticos.
*/

let a = 10;
let b = 3;

a + b;  // Adição → 13
a - b;  // Subtração → 7
a * b;  // Multiplicação → 30
a / b;  // Divisão → 3.33
a % b;  // Resto da divisão → 1
a ** b; // Potenciação → 1000

////////////////////////////////////////
// 🔹 3️⃣ OPERADORES DE ATRIBUIÇÃO
////////////////////////////////////////

/*
Atribuem valores a variáveis.
*/

let x = 10;

x += 5;  // x = x + 5
x -= 2;  // x = x - 2
x *= 3;  // x = x * 3
x /= 2;  // x = x / 2
x %= 2;  // x = x % 2

////////////////////////////////////////
// 🔹 4️⃣ OPERADORES DE COMPARAÇÃO
////////////////////////////////////////

/*
Comparam valores e retornam true ou false.
*/

10 == "10";   // true  (compara valor)
10 === "10";  // false (compara valor + tipo)

10 != "10";   // false
10 !== "10";  // true

10 > 5;   // true
10 < 5;   // false
10 >= 10; // true
10 <= 9;  // false

////////////////////////////////////////
// 🔹 5️⃣ OPERADORES LÓGICOS
////////////////////////////////////////

/*
Usados para combinar condições.
*/

true && false; // AND → false
true || false; // OR → true
!true;         // NOT → false

/*
Exemplo real:
*/

let idade = 20;
let temCarteira = true;

idade >= 18 && temCarteira; 
// true → pode dirigir

////////////////////////////////////////
// 🔹 6️⃣ OPERADOR TERNÁRIO
////////////////////////////////////////

/*
Forma curta de if/else.
*/

let idadeUsuario = 17;

let mensagem = idadeUsuario >= 18 
  ? "Maior de idade"
  : "Menor de idade";

////////////////////////////////////////
// 🔹 7️⃣ OPERADOR typeof
////////////////////////////////////////

/*
Verifica o tipo de um valor.
*/

typeof "Lucas"; // string
typeof 10;      // number
typeof true;    // boolean
typeof {};      // object
typeof [];      // object
typeof null;    // object (bug histórico)

////////////////////////////////////////
// 🔹 8️⃣ OPERADOR DE COALESCÊNCIA NULA
////////////////////////////////////////

/*
Retorna o valor da direita se o da esquerda
for null ou undefined.
*/

let usuario = null;

let nomeUsuario = usuario ?? "Visitante";
// "Visitante"

////////////////////////////////////////
// 🔹 9️⃣ OPERADOR DE ENCADEAMENTO OPCIONAL
////////////////////////////////////////

/*
Evita erro ao acessar algo que pode ser undefined.
*/

let pessoa = {};

pessoa.endereco?.rua;
// undefined (sem erro)

////////////////////////////////////////
// 🧠 RESUMO FINAL
////////////////////////////////////////

/*
✅ Expressão → sempre retorna um valor;
✅ Operadores → manipulam valores dentro das expressões;
✅ JavaScript executa expressões o tempo todo;
✅ Entender operadores é essencial para lógica de programação.

*/