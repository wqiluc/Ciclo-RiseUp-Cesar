// ===============================
// 📄 RESUMÃO DOM + EVENTOS EM JS
// ===============================

// 1️⃣ ACESSAR O DOCUMENT
console.log(document);
console.log(document.title);


// 2️⃣ SELECIONAR ELEMENTOS

// Por ID
const elById = document.getElementById("id");

// Por Classe
const elByClass = document.getElementsByClassName("classe");

// Por Tag
const elByTag = document.getElementsByTagName("div");

// Query Selector (CSS)
const el = document.querySelector("#id");
const els = document.querySelectorAll(".classe");


// 3️⃣ MANIPULAR CONTEÚDO

const elemento = document.querySelector("#exemplo");

elemento.textContent = "Novo texto";
elemento.innerText = "Novo texto visível";
elemento.innerHTML = "<strong>HTML aqui</strong>";


// 4️⃣ MANIPULAR CLASSES

elemento.classList.add("ativo");
elemento.classList.remove("ativo");
elemento.classList.toggle("ativo");


// 5️⃣ MANIPULAR ESTILO

elemento.style.backgroundColor = "pink";
elemento.style.color = "black";


// 6️⃣ CRIAR ELEMENTOS

const novo = document.createElement("li");
novo.textContent = "Lucas";

const listaa = document.querySelector("ul");
listaa.append(novo);


// 7️⃣ MANIPULAR ATRIBUTOS

const input = document.querySelector("input");

input.setAttribute("disabled", true);
input.removeAttribute("disabled");
input.setAttribute("type", "file");


// 8️⃣ EVENTOS

// Click
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  console.log("Botão clicado!");
});

// Load
window.addEventListener("load", () => {
  console.log("Página carregada!");
});

// Submit
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form enviado!");
});

// Teclado
input.addEventListener("keydown", (event) => {
  console.log(`Tecla pressionada: ${event.key}`);
});

// Change
input.addEventListener("change", (event) => {
  console.log(`Novo valor: ${event.target.value}`);
});

// Scroll
window.addEventListener("scroll", () => {
  console.log("Rolando página...");
});

// 9️⃣ SCROLL EM ELEMENTO

const ul = document.querySelector("ul");

ul.addEventListener("scroll", () => {
  console.log(ul.scrollTop);
});

ul.scrollTo({
  top: 100,
  left: 0,
  behavior: "smooth"
});


// 🔟 EVENT OBJECT (OBJETO DO EVENTO)

document.addEventListener("click", (event) => {
  console.log(event.type);
  console.log(event.target);
  console.log(event.currentTarget);
});


// 1️⃣1️⃣ PREVENTDEFAULT E STOPPROPAGATION

const link = document.querySelector("a");

link.addEventListener("click", (event) => {
  event.preventDefault();
});

const div = document.querySelector("div");

div.addEventListener("click", (event) => {
  event.stopPropagation();
});


// 1️⃣2️⃣ DELEGAÇÃO DE EVENTOS

const lista = document.querySelector("ul");

lista.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log("Item clicado:", event.target.textContent);
  }
});


// 1️⃣3️⃣ INPUT EVENTS IMPORTANTES

const input2 = document.querySelector("input");

input2.addEventListener("input", (event) => {
  console.log(event.target.value);
});

input2.addEventListener("focus", () => {
  console.log("Input focado");
});

input2.addEventListener("blur", () => {
  console.log("Input perdeu foco");
});


// 1️⃣4️⃣ DATASET (data-* attributes)

const box = document.querySelector("[data-id]");

console.log(box.dataset.id);

box.dataset.status = "ativo";


// 1️⃣5️⃣ REMOVER ELEMENTO

const item = document.querySelector("li");

item.remove();


// 1️⃣6️⃣ CLONAR ELEMENTO

const original = document.querySelector(".guest");

const clone = original.cloneNode(true);

document.body.append(clone);


// 1️⃣7️⃣ TRABALHANDO COM FORM

const form2 = document.querySelector("form");

form2.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form2);

  for (let [key, value] of formData.entries()) {
    console.log(key, value);
  }
});


// 1️⃣8️⃣ VALIDAR COM REGEX

const emailInput = document.querySelector("#email");

emailInput.addEventListener("input", (event) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(event.target.value)) {
    event.target.classList.add("error");
  } else {
    event.target.classList.remove("error");
  }
});


// 1️⃣9️⃣ MANIPULAR NÓS (NAVEGAÇÃO)

const elemento = document.querySelector("#exemplo");

console.log(elemento.parentElement);
console.log(elemento.children);
console.log(elemento.firstElementChild);
console.log(elemento.lastElementChild);
console.log(elemento.nextElementSibling);
console.log(elemento.previousElementSibling);

// 2️⃣0️⃣ EXECUTAR QUANDO DOM CARREGAR

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM totalmente carregado");
});