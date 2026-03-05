console.log("JavaScript carregado! Vamos converter moedas!");

// taxas de conversão baseadas no Real
const rates = {
BRL: 1,
USD: 5.2,
EUR: 5.9
};

// capturando elementos do HTML
const form = document.getElementById("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const currencyTo = document.getElementById("currencyTo");
const result = document.querySelector(".resultado");
const description = document.querySelector(".descricao");

// função arrow para formatar valores monetários
const formatCurrency = (value, currency) =>
new Intl.NumberFormat("pt-BR", {
style: "currency",
currency: currency
}).format(value);

// função para exibir o resultado total da conversão
function showResult(converted, from, to){
result.innerHTML = `Resultado: ${formatCurrency(converted, to)}`;
description.innerHTML = `Cotação atual: 1 ${from} = ${(rates[from] / rates[to]).toFixed(2)} ${to}`;
result.classList.add("ativo");}

// remove caracteres que não são números do input
amount.addEventListener("input", function () {
const hasCharacterRegex = /\D+/g;
amount.value = amount.value.replace(hasCharacterRegex, "");
});

// evento de envio do formulário
form.addEventListener("submit", function(event){

event.preventDefault(); // impede recarregar a página

try{

// pega o valor digitado
const value = Number(amount.value);

// valida se o valor é válido
if(!value){
throw new Error("Digite um valor válido");
}

// pega apenas o código da moeda (BRL, USD, EUR)
const from = currency.value.split(" - ")[0];
const to = currencyTo.value.split(" - ")[0];

// converte primeiro para BRL
const valueInBRL = value * rates[from];

// depois converte para a moeda final
const converted = valueInBRL / rates[to];

// chama a função que mostra o resultado
showResult(converted, from, to);

}catch(error){

// mostra mensagem de erro caso algo falhe
result.innerHTML = `Erro: ${error.message}`;
description.innerHTML = `Não foi possível realizar a conversão para o valor ${amount.value} ❌`;

}finally{

// sempre executa ao final da tentativa de conversão
console.log(`Conversão finalizada para o valor ${amount.value}`);

}});