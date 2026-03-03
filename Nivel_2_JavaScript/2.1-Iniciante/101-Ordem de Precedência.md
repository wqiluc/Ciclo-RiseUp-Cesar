<h1 align="center"> Ordem e Precedência no JavaScript <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="22"></h1>

<p align="center">
<img src="../img/Ordem e Precedência.jpeg" width="600">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-ES5-F7DF1E?style=flat&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/Engine-V8-4B8BBE?style=flat&logo=googlechrome&logoColor=white">
</p>


## 📌 O que é Ordem e Precedência?

**Precedência** define qual operador será executado primeiro quando há vários na mesma expressão.

JavaScript segue regras matemáticas parecidas com a matemática tradicional.

Se não entender a ordem, o resultado pode ser diferente do esperado.


## 🧠 Regra Geral de Prioridade

Da maior para a menor:

1. `()` → Parênteses  
2. `**` → Potenciação  
3. `*`, `/`, `%`  
4. `+`, `-`  
5. `>`, `<`, `>=`, `<=`  
6. `==`, `===`, `!=`, `!==`  
7. `&&`  
8. `||`  
9. `=` → Atribuição  

📌 Operadores com a mesma precedência executam da esquerda para direita.  
⚠️ Exceção: `**` executa da direita para esquerda.

<br>

# 🔢 Exemplo 1 — Sem Parênteses

```js
let resultado = 2 + 3 * 4;
console.log(resultado);

let resultado = (2 + 3) * 4;
console.log(resultado); // 20

// Multiplicação executa primeiro
// 3 * 4 = 12
// 2 + 12 = 14
```

# 🔢 Exemplo 2 — Com Parênteses

```js
let resultado = (2 + 3) * 4;
console.log(resultado); // 20

// Parênteses têm prioridade
// 2 + 3 = 5
// 5 * 4 = 20
``` 

# 🔎 Exemplo 3 — Comparação e Lógica

```js
let resultado = 10 > 5 && 2 < 1;
console.log(resultado); // false

// Ordem:
// 10 > 5  → true
// 2 < 1   → false
// true && false → false
```