/*
===========================================
OPERADORES LÓGICOS EM JAVASCRIPT 🔎🧠
===========================================

Operadores lógicos servem para combinar ou inverter valores booleanos (true/false).
Eles são muito usados em condicionais (if, while, ternários, etc).

-------------------------------------------------
1️⃣ AND ( && ) → "E"
-------------------------------------------------

Retorna true se TODAS as condições forem verdadeiras.

true  && true → true
true  && false → false
false && true  → false
false && false → false

Exemplo:
*/

let idade = 20;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
    console.log("Pode dirigir 🚗");
}

/*
✅ Só entra no if se as DUAS condições forem verdadeiras.

-------------------------------------------------
2️⃣ OR ( || )  →  "OU"
-------------------------------------------------

Retorna true se PELO MENOS UMA condição for verdadeira.

true  || true   → true✅
true  || false  → true✅
false || true   → true✅
false || false  → false❌

Exemplo:
*/

let temDinheiro = false;
let temCartao = true;

if (temDinheiro || temCartao) {
    console.log("Pode pagar 💳");
}

/*
✅ Basta UMA condição ser verdadeira.

-------------------------------------------------
3️⃣ NOT ( ! ) → "NÃO"
-------------------------------------------------

Inverte o valor booleano.

!true  → false
!false → true

Exemplo:
*/

let estaChovendo = false;

if (!estaChovendo) {
    console.log("Pode sair ☀️");
}

/*
✔ O ! transforma false em true e vice-versa.

-------------------------------------------------
4️⃣ Curiosidade importante ⚠️
-------------------------------------------------

JavaScript usa "Short-Circuit" (avaliação curta):

AND (&&):
Se a primeira condição for false, ele nem verifica a segunda.

OR (||):
Se a primeira condição for true, ele nem verifica a segunda.

Exemplo:
*/

false && console.log("Nunca aparece");
true || console.log("Também não aparece");

/*
-------------------------------------------------
Resumo Final 🎯
-------------------------------------------------

&&  → todas verdadeiras
||  → pelo menos uma verdadeira
!   → inverte o valor

Esses operadores são fundamentais para controlar decisões no código.
*/