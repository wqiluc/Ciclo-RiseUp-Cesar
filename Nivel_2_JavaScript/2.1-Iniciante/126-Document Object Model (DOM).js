/*
===========================================================
📌 DOM - Document Object Model
===========================================================

O DOM (Document Object Model) é uma representação em OBJETOS
da estrutura do HTML.

Quando o navegador carrega uma página HTML, ele transforma
cada elemento em um OBJETO JavaScript.

Ou seja 👇

HTML → vira → OBJETOS → que podemos manipular com JS 🚀

Isso permite:
- Alterar textos;
- Alterar estilos;
- Criar elementos;
- Remover elementos;
- Reagir a eventos (cliques, teclado, etc).

===========================================================
🌳 ESTRUTURA EM ÁRVORE
===========================================================

O DOM é organizado como uma ÁRVORE 🌳

Exemplo HTML:

<html>
  <body>
    <h1 align="center">Título</h1>
    <p>Parágrafo</p>
  </body>
</html>

Estrutura no DOM:

document
 └── html
      └── body
            ├── h1
            └── p

Cada item dessa árvore é chamado de:

🔹 Node (nó)
🔹 Element (elemento)
🔹 Text (texto)

===========================================================
📌 OBJETO PRINCIPAL: document
===========================================================

O objeto principal do DOM é:

document

Ele representa toda a página.

Exemplo:
*/

console.log(document);

/*
===========================================================
🔎 SELECIONANDO ELEMENTOS
===========================================================

Para manipular algo, primeiro precisamos SELECIONAR.

1️⃣ Por ID
*/

let titulo = document.getElementById("titulo");

/*
2️⃣ Por Classe
*/

let itens = document.getElementsByClassName("item");

/*
3️⃣ Por Tag
*/

let paragrafos = document.getElementsByTagName("p");

/*
4️⃣ Forma Moderna (mais usada hoje) ✅
*/

let caixa = document.querySelector(".caixa");
let todasCaixas = document.querySelectorAll(".caixa");

/*
querySelector → retorna o PRIMEIRO que encontrar
querySelectorAll → retorna TODOS

===========================================================
✏️ ALTERANDO CONTEÚDO
===========================================================

Podemos alterar texto usando:

innerText
textContent
innerHTML
*/

titulo.innerText = "Novo Título ✅";

/*
Diferença:

innerText → respeita estilo e layout
textContent → pega todo texto
innerHTML → permite inserir HTML

Exemplo:
*/

titulo.innerHTML = "<span style='color:red'>Título Vermelho</span>";

/*
===========================================================
🎨 ALTERANDO ESTILO
===========================================================

Podemos alterar CSS via JavaScript:
*/

titulo.style.color = "blue";
titulo.style.backgroundColor = "yellow";
titulo.style.fontSize = "30px";

/*
⚠️ Observação:
Propriedades CSS com hífen viram camelCase:

background-color → backgroundColor
font-size → fontSize

===========================================================
🆕 CRIANDO ELEMENTOS
===========================================================

Podemos criar novos elementos dinamicamente:
*/

let novoParagrafo = document.createElement("p");

novoParagrafo.innerText = "Eu fui criado pelo JavaScript 😎";

/*
Agora precisamos adicionar ao HTML:
*/

document.body.appendChild(novoParagrafo);

/*
appendChild → adiciona como último filho

===========================================================
❌ REMOVENDO ELEMENTOS
===========================================================
*/

novoParagrafo.remove();

/*
Ou:

elementoPai.removeChild(elementoFilho);

===========================================================
🖱️ EVENTOS (INTERAÇÃO)
===========================================================

O DOM também permite reagir a ações do usuário.

Exemplo: clique
*/

titulo.addEventListener("click", function () {
  alert("Você clicou no título 🚀");
});

/*
Principais eventos:

click → clique
mouseover → passar o mouse
keydown → tecla pressionada
submit → envio de formulário
input → digitação

===========================================================
📌 PERCORRENDO A ÁRVORE (NAVEGAÇÃO)
===========================================================

parentNode → elemento pai
children → filhos
firstElementChild → primeiro filho
lastElementChild → último filho

Exemplo:
*/

console.log(document.body.children);

/*
===========================================================
⚡ DOM vs BOM
===========================================================

DOM → Manipula o HTML da página
BOM → Browser Object Model (janela do navegador)

Exemplo de BOM:

window.alert("Olá 👋");
window.location.href;
window.innerWidth;

===========================================================
🧠 RESUMO FINAL
===========================================================

O DOM permite:

✅ Selecionar elementos;
✅ Alterar conteúdo;
✅ Alterar estilo;
✅ Criar elementos;
✅ Remover elementos;
✅ Trabalhar com eventos;
✅ Navegar pela estrutura da página.

Sem o DOM, o JavaScript não conseguiria interagir
com o HTML.

DOM é a ponte entre:
JavaScript 🧠 e HTML 🎨

===========================================================
🚀 FIM
===========================================================
*/