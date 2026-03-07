// For in é uma estrutura de repetição utilizada para iterar 
//sobre as propriedades de um objeto ou os índices de um array. 
//Ele é especialmente útil quando você deseja 
//acessar as chaves de um objeto ou 
//os índices de um array sem se preocupar com a ordem.

// Exemplo com um objeto:

const pessoa = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo"
};

for (let chave in pessoa) {
  console.log(chave + ": " + pessoa[chave]);
}

// Saída:
// nome: João
// idade: 30
// cidade: São Paulo

// Exemplo com um array:

const frutas = ["maçã", "banana", "laranja"];

for (let indiceFrutas in frutas) {
  console.log(indiceFrutas + ": " + frutas[indiceFrutas]);
}