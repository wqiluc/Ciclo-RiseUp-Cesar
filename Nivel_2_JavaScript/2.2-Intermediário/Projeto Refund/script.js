// Seleciona o formulário
const form = document.querySelector("form");

// Campos do formulário
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");

// Lista de despesas
const dispesaLista = document.querySelector("ul");

// Campo que mostra o total acumulado
const totalElement = document.getElementById("total");

// Campo que mostra quantidade de despesas
const countElement = document.getElementById("count");

// Botão de limpar lista
const clearButton = document.getElementById("clear");

// ===============================
// VARIÁVEIS
// ===============================

let total = 0;
let quantidadeDespesas = 0;

// ===============================
// FORMATAÇÃO DO VALOR
// ===============================

amount.addEventListener("input", () => {

    let value = amount.value.replace(/\D/g, "");

    value = Number(value) / 100;

    amount.value = formatoAtualBRL(value);
});

// ===============================
// FUNÇÃO DE FORMATAÇÃO EM REAL
// ===============================

function formatoAtualBRL(value){
    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

// ===============================
// ATUALIZA CONTADOR
// ===============================

function atualizarContador(){

    if(quantidadeDespesas === 1){
        countElement.textContent = "1 despesa";
    }else{
        countElement.textContent = `${quantidadeDespesas} despesas`;
    }
}

// ===============================
// ENVIO DO FORMULÁRIO
// ===============================

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const amountValue = Number(
        amount.value
        .replace("R$", "")
        .replace(/\./g, "")
        .replace(",", ".")
        .trim()
    );

    const novaDespesa = {
        id: new Date().getTime(),
        expense: expense.value.trim(),
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amountValue
    };

    adicionaDispesa(novaDespesa);

    limparFormulario();
});

// ===============================
// FUNÇÃO PARA ADICIONAR DESPESA
// ===============================

function adicionaDispesa(novaDespesa){

    const dispesaItem = document.createElement("li");
    dispesaItem.classList.add("expense");

    const dispesaIcone = document.createElement("img");
    dispesaIcone.setAttribute("src", `img/${novaDespesa.category_id}.svg`);

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("expense-info");

    const nomeDespesa = document.createElement("strong");
    nomeDespesa.textContent = novaDespesa.expense;

    const categoriaDespesa = document.createElement("span");
    categoriaDespesa.textContent = novaDespesa.category_name;

    infoDiv.append(nomeDespesa);
    infoDiv.append(categoriaDespesa);

    const valorDespesa = document.createElement("span");
    valorDespesa.classList.add("expense-amount");
    valorDespesa.innerHTML = `<small>R$</small>${novaDespesa.amount.toLocaleString("pt-BR", {minimumFractionDigits:2})}`;

    const removerIcone = document.createElement("img");
    removerIcone.setAttribute("src", `img/remove.svg`);
    removerIcone.classList.add("remove-icon");

    removerIcone.addEventListener("click", () => {

        dispesaItem.remove();

        total -= novaDespesa.amount;
        totalElement.textContent = formatoAtualBRL(total);

        quantidadeDespesas--;
        atualizarContador();
    });

    dispesaItem.append(dispesaIcone);
    dispesaItem.append(infoDiv);
    dispesaItem.append(valorDespesa);
    dispesaItem.append(removerIcone);

    dispesaLista.append(dispesaItem);

    total += novaDespesa.amount;
    totalElement.textContent = formatoAtualBRL(total);

    quantidadeDespesas++;
    atualizarContador();
}

// ===============================
// LIMPAR FORMULÁRIO
// ===============================

function limparFormulario(){

    expense.value = "";
    amount.value = "";
    category.value = "";
}

// ===============================
// BOTÃO LIMPAR LISTA
// ===============================

clearButton.addEventListener("click", () => {

    const itens = dispesaLista.querySelectorAll("li");

    for(let i = 0; i < itens.length; i++){
        itens[i].remove();
    }

    total = 0;
    quantidadeDespesas = 0;

    totalElement.textContent = formatoAtualBRL(total);

    atualizarContador();
});