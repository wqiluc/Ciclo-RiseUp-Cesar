"use strict"

// O strict mode (modo estrito): ativando esse modo,
// os erros que eram silenciosos
// passam a gerar exceções no Javascript.

function mostrarMsg(){
    let nomedePessoa = "Lucas Paguetti";
    console.log("Olá,", nomedePessoa);
}

mostrarMsg();

class Estudante{
    get ponto(){
        return 7;
    }
}

let estudante = new Estudante();
console.log(estudante.ponto)

// Tentando deletar uma propriedade de um objeto que não posso deletar:
// delete window.document é impossível


// destructuring assignment (desestruturação) permite extrair dados de arrays ou objetos em variáveis distintas.

const dados = ["Lucas Paguetti", "lpp2@cesar.school"];

// Desconstruindo o array
const [nomedeUsuario, email] = dados;

console.log("Nome:", nomedeUsuario);
console.log("Email:", email);

const frutas = ["Banana", "Maçã", "Uva"];

// Desestruturando apenas uma fruta
const [primeiraFruta] = frutas;

console.log("Fruta:", primeiraFruta);

const cores = ["Azul", "Verde", "Vermelho", "Amarelo"];

// Ignora o primeiro valor e pega o restante
const [, ...restoCores] = cores;

console.log(restoCores);

// 1️⃣ Desestruturação básica

const pessoa = {
    nome: "Lucas Paguetti",
    idade: 20,
    email: "lpp2@cesar.school"
};

const { nome, idade } = pessoa;

console.log(nome);
console.log(idade);

// 2️⃣ Desestruturando e renomeando variáveis

const produto = {
    nome: "Notebook",
    preco: 3500,
    marca: "Dell"
};

const { nome: nomeProduto, preco } = produto;

console.log(nomeProduto);
console.log(preco);

// 3️⃣ Desestruturando e pegando o resto das propriedades

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Preto"
};

const { marca, ...resto } = carro;

console.log(marca);
console.log(resto);

//1️⃣ Exemplo básico de Rest Params
// Rest Params junta todos os argumentos em um array

function soma(...numeros){
    console.log(numeros);
}

soma(1, 2, 3, 4);

// 2️⃣ Usando Rest Params para somar números
// Função que soma qualquer quantidade de números
function somar(...valores){
    let total = 0;

    // percorre o array criado pelo rest params
    for(let numero of valores){
        total += numero;
    }

    return total;
}

console.log(somar(10, 20, 30));

// 3️⃣ Rest Params junto com outros parâmetros
// O primeiro parâmetro é fixo e o resto vai para o array

function mensagem(usuario, ...mensagens){
    console.log("Usuário:", usuario);
    console.log("Mensagens:", mensagens);
}

mensagem("Lucas", "Olá", "Tudo bem?", "Bem-vindo");


//4️⃣ Usando Rest Params com arrow function.
// Arrow function usando rest params

const multiplicar = (...numeros) => {
    let resultado = 1;

    for(let n of numeros){
        resultado *= n;
    }

    return resultado;
};

console.log(multiplicar(2,3,4));

//1️⃣ Spread in Arrays
// The spread operator "spreads" the values of the array

const numbers = [1, 2, 3];

console.log(...numbers);

//2️⃣ Merging Arrays
// Two arrays

const fruits = ["Banana", "Apple"];
const moreFruits = ["Grape", "Mango"];

// merging arrays with spread
const allFruits = [...fruits, ...moreFruits];

console.log(allFruits);

//3️⃣ Copying Arrays

const numbersList = [10, 20, 30];

// creating a copy
const copyNumbers = [...numbersList];

console.log(copyNumbers);

//4️⃣ Spread in Objects

const person = {
    name: "Lucas",
    age: 20
};

// copying object
const personCopy = { ...person };

console.log(personCopy);

//5️⃣ Updating objects with Spread

const user = {
    name: "Lucas",
    age: 20
};

const updatedUser = {
    ...user,
    age: 21
};

console.log(updatedUser);