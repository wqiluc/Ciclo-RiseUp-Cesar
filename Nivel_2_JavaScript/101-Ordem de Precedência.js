/*
====================================
📘 ORDEM E PRECEDÊNCIA NO JAVASCRIPT
====================================

Precedência define qual operador executa primeiro
quando há vários na mesma expressão.

Regra geral:
()  -> maior prioridade
**  -> potência
* / % 
+ -
> < >= <=
== === != !==
&&
||
=  -> menor prioridade

Se tiver a mesma precedência:
→ executa da esquerda para direita
(exceto ** que says da direita para esquerda)
*/

//////////////////////////////////////
// 🔹 EXEMPLO 1
//////////////////////////////////////

let resultado1 = 2 + 3 * 4;
console.log(resultado1); // 14

/*
Multiplicação vem antes da soma:
3 * 4 = 12
2 + 12 = 14
*/

//////////////////////////////////////
// 🔹 EXEMPLO 2
//////////////////////////////////////

let resultado2 = (2 + 3) * 4;
console.log(resultado2); // 20

/*
Parênteses têm prioridade:
2 + 3 = 5
5 * 4 = 20
*/

//////////////////////////////////////
// 🔹 EXEMPLO 3
//////////////////////////////////////

let resultado3 = 10 > 5 && 2 < 1;
console.log(resultado3); // false

/*
Ordem:
1° comparações (>, <)
2° operador lógico (&&)

10 > 5  → true
2 < 1   → false
true && false → false
*/

//////////////////////////////////////
// 🔹 EXEMPLO 4
//////////////////////////////////////

let resultado4 = 2 ** 3 ** 2;
console.log(resultado4); // 512

/*
Potência executa da direita para esquerda:

3 ** 2 = 9
2 ** 9 = 512
*/

//////////////////////////////////////
// 🧠 RESUMO
//////////////////////////////////////

/*
✅ Use parênteses para evitar dúvidas;
✅ Multiplicação e divisão vêm antes de soma;
✅ Comparações vêm antes de operadores lógicos; e
✅ Atribuição (=) quase sempre executa por último.
*/