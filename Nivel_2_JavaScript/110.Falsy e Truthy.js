/*
========================================
🔎 TRUTHY e FALSY — EXPLICANDO NA PRÁTICA
========================================

JavaScript converte valores automaticamente para boolean
quando usados em:

- if
- while
- operador ternário
- &&
- ||

Isso se chama COERÇÃO DE TIPO.
*/


/* ================================
🔴 FALSY (retornam false)
================================ */

console.log(Boolean(false));      // false → já é falso
console.log(Boolean(0));          // false → zero é falsy
console.log(Boolean(""));         // false → string vazia é falsy
console.log(Boolean(null));       // false → ausência intencional de valor
console.log(Boolean(undefined));  // false → variável não definida
console.log(Boolean(NaN));        // false → número inválido


/* ================================
🟢 TRUTHY (retornam true)
================================ */

console.log(Boolean(1));          // true → número diferente de 0
console.log(Boolean(-5));         // true → qualquer número ≠ 0
console.log(Boolean("JS"));       // true → string não vazia
console.log(Boolean(" "));        // true → espaço NÃO é vazio
console.log(Boolean([]));         // true → array vazio é truthy
console.log(Boolean({}));         // true → objeto vazio é truthy


/* ================================
📌 Em estruturas condicionais
================================ */

let nome = "";

if (nome) {
    console.log("Tem nome");
} else {
    console.log("Não tem nome"); // executa porque "" é falsy
}


let linguagem = "JavaScript";

if (linguagem) {
    console.log("Valor existe"); // executa porque é truthy
}


/* ================================
⚡ Operador OR (||)
Retorna o PRIMEIRO valor truthy
================================ */

console.log("" || "Valor padrão");
// "" é falsy → retorna "Valor padrão"

console.log("Lucas" || "Outro");
// "Lucas" é truthy → retorna "Lucas"


/* ================================
⚡ Operador AND (&&)
Retorna o PRIMEIRO valor falsy
ou o ÚLTIMO truthy
================================ */

console.log("Lucas" && 25);
// ambos são truthy → retorna 25

console.log(0 && "Teste");
// 0 é falsy → retorna 0
