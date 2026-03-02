/*
===========================================
CONDICIONAL SIMPLES EM JAVASCRIPT 🚦
===========================================

Condicional simples é quando usamos apenas o "if"
para executar algo SE uma condição for verdadeira.

Estrutura básica:

if (condição) {
    // código executado se for true
}

Se a condição for false, nada acontece.

-------------------------------------------------
1️⃣ Exemplo básico
-------------------------------------------------
*/

let idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade ✅");
}

/*
✅ Se idade for 18 ou mais → executa
❌ Se for menor → não executa nada

-------------------------------------------------
2️⃣ Como a condição funciona? 🧠
-------------------------------------------------

A condição precisa retornar true ou false.

Exemplos de comparações:
>   maior que
<   menor que
>=  maior ou igual
<=  menor ou igual
==  igual (valor)
=== igual (valor e tipo)
!=  diferente

-------------------------------------------------
3️⃣ Outro exemplo prático 💡
-------------------------------------------------
*/

let saldo = 100;

if (saldo > 0) {
    console.log("Saldo disponível 💰");
}

/*
✅ Se saldo for maior que 0 → aparece mensagem
❌ Se for 0 ou negativo → nada acontece

-------------------------------------------------
Resumo 🎯
-------------------------------------------------

Condicional simples usa apenas:

if (condição) {
    ação
}

Ela executa algo SOMENTE se a condição for verdadeira.
Sem "else", sem alternativa.
*/