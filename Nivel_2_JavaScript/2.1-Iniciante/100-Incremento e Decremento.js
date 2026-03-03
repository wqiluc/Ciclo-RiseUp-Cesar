/* INCREMENTO (++) E DECREMENTO (--) NO JS

Incrementar = somar 1
Decrementar = subtrair 1

Existem dois tipos:
1) Pós -> usa o valor primeiro, depois altera (x++ / x--)
2) Pré -> altera primeiro, depois usa (++x / --x)
*/

//////////////////////////////////////
// 🔹 PÓS-INCREMENTO
//////////////////////////////////////

let number = 10;
let incremento = number++;

console.log(incremento); // 10 (usa antes de somar)
console.log(number);     // 11 (somou depois)

/*
number++:
1° retorna 10
2° vira 11
*/

//////////////////////////////////////
// 🔹 PRÉ-INCREMENTO
//////////////////////////////////////

let numberPre = 10;
let incrementoPre = ++numberPre;

console.log(incrementoPre); // 11 (soma antes)
console.log(numberPre);     // 11

/*
++number:
1° vira 11
2° retorna 11
*/

//////////////////////////////////////
// 🔹 PÓS-DECREMENTO
//////////////////////////////////////

let number2 = 20;
let decremento = number2--;

console.log(decremento); // 20 (usa antes de diminuir)
console.log(number2);    // 19

/*
number--:
1° retorna 20
2° vira 19
*/

//////////////////////////////////////
// 🔹 PRÉ-DECREMENTO
//////////////////////////////////////

let numberPreDec = 20;
let decrementoPre = --numberPreDec;

console.log(decrementoPre); // 19 (diminui antes)
console.log(numberPreDec);  // 19

/*
--number:
1° vira 19
2° retorna 19
*/