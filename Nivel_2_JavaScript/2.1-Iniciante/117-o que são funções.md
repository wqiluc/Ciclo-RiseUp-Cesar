<h1 align="center"> Funções no <mark style="background-color: #F7DF1E">JavaScript</mark> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="22"></h1>

<p align="center">
<img src="../img/funções.jpeg" width="550">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-ES5-F7DF1E?style=flat&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/Estrutura-Funções-4CAF50?style=flat">
</p>


## 📌 O que são Funções?

Funções são **blocos de código reutilizáveis** que executam uma tarefa específica.

Elas servem para:

- organizar o código;
- evitar repetição;
- facilitar manutenção; e
- tornar o código mais legível.

Uma função só executa quando é chamada.


## 🏗 Estrutura Básica (Function Declaration):

```js
function saudacao() {
    console.log("Olá, mundo! 👋")
}
``` 

📌 Para executar:
saudacao()
✅ A função executa apenas quando é chamada.

<br>

📥 Função com Parâmetros
Parâmetros são valores que a função recebe.
```js

function saudacao(nome) {
    console.log(`Olá, ${nome}! 👋`)
}
saudacao("Lucas")
```

📌 nome é o parâmetro; <br>
📌 "Lucas" é o argumento. <br>
✅ Permite reutilizar a função com valores diferentes.

<br>

🔁 Função com Retorno (return)
O return devolve um valor.

```js
function somar(a, b) {
    return a + b
}
let resultado = somar(5, 3)
console.log(resultado)
```

📌 return encerra a função; <br>
📌 tudo após o return não executa. <br>
✅ Permite guardar o resultado em uma variável.

<br>

# ⚡ Function Expression
Função armazenada em uma variável.

```js
const multiplicar = function(a, b) {
    return a * b
}
console.log(multiplicar(4, 2))
```

✅ Pode ser usada como valor;
⚠️ Não sofre hoisting como function declaration.

<br>

# 🚀 Arrow Function (ES6+)
Forma moderna e mais curta.
```js
const dividir = (a, b) => {
    return a / b
}

console.log(dividir(10, 2))
Versão reduzida (quando há apenas um return):
const dobro = numero => numero * 2

console.log(dobro(6))
```

✅ Sintaxe mais limpa; <br>
✅ Muito usada em callbacks.

<br>

🧠 Função Anônima
Função sem nome.
```js
setTimeout(function() {
    console.log("Executou após 2 segundos ⏳")
}, 2000)
```

✅ Muito usada como argumento.

<br>

🔄 Função Callback
Função passada como parâmetro para outra função.
```js
function executar(funcao) {
    funcao()
}

executar(() => {
    console.log("Sou uma callback 🔁")
})
``` 

📌 Muito comum em eventos e métodos de array.

<br>

# 🎯 Resumo
função é um bloco reutilizável de código;
parâmetros recebem valores externos;
return devolve um resultado;
function expression permite armazenar funções em variáveis;
arrow function é uma forma moderna e reduzida; e
callbacks permitem passar funções como argumento.