/*
========================================================
📚 CORREÇÃO E CONVERSÃO DE TIPOS NO JAVASCRIPT
========================================================

JavaScript é uma linguagem de tipagem dinâmica 🧠
Isso significa que os tipos podem mudar automaticamente.

Mas isso pode causar comportamentos inesperados ⚠️❌

Por isso precisamos entender:
✅ Coerção (conversão automática).
✅ Conversão explícita;
✅ Comparação correta (== vs ===)

/*
- Conversão de tipos (type casting ou type conversion):
  ocorre quando você explicitamente transforma um valor de um
  tipo para outro. Isso é feito de forma consciente, usando
  funções ou métodos específicos para realizar a conversão.

- Coerção de tipos:
  acontece de forma automática (implicitamente). O JavaScript
  tenta automaticamente converter um dos valores para um tipo
  compatível antes de realizar a operação.
*/

/*
========================================================
1️⃣ COERÇÃO DE TIPOS (AUTOMÁTICA)
========================================================
*/

console.log("5" + 2); 
// "52" → o número vira string (concatenação🔃)

console.log("5" - 2); 
// 3 → a string vira número

console.log(true + 1); 
// 2 → true vira 1

console.log(false + 1); 
// 1 → false vira 0

/*
🧠 Regra rápida:

String + algo → concatena;
Operação matemática → tenta virar número;
true = 1;
false = 0.
*/

/*
========================================================
2️⃣ CONVERSÃO EXPLÍCITA (MANUAL)
========================================================
*/

console.log(Number("10"));     // 10
console.log(String(10));       // "10"
console.log(Boolean(1));       // true
console.log(Boolean(0));       // false

/*
Funções principais:

✅ Number()  → converte para número;
✅ String()  → converte para string;
✅ Boolean() → converte para boolean.
*/

/*
========================================================
3️⃣ == vs === (CORREÇÃO DE COMPARAÇÃO)
========================================================
*/

console.log(5 == "5");   
// true → compara valor (faz coerção)

console.log(5 === "5");  
// false → compara valor E O tipo

/*
Diferença:

==  → compara só o valor (perigoso ⚠️);
=== → compara valor e tipo (recomendado ✅).

Sempre prefira usar === 😎
*/

/*
========================================================
📌 RESUMÃO
========================================================

JavaScript pode converter tipos automaticamente,
mas isso pode gerar bugs.

Use:

✅ Conversão explícita quando necessário;
✅ === ao invés de ==;
✅ Atenção com operações envolvendo string.

*/