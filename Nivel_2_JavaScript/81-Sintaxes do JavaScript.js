// ===============================================
// 99 - Principais Sintaxes do JavaScript
// ===============================================



// ------------------------------------------------
// 1) VARIÁVEIS
// ------------------------------------------------

// let → variável que pode mudar
let nome = "Lucas";

// const → variável que NÃO pode ser reatribuída
const idade = 20;

// var → forma antiga (evite usar)
var cidade = "Recife";



// ------------------------------------------------
// 2) TIPOS DE DADOS
// ------------------------------------------------

let texto = "JavaScript";     // String (texto)
let numero = 10;              // Number (número)
let decimal = 3.14;           // Number decimal
let ativo = true;             // Boolean (true ou false)
let vazio = null;             // Null (ausência intencional)
let indefinido;               // Undefined (não definido)



// ------------------------------------------------
// 3) OPERADORES
// ------------------------------------------------

let soma = 5 + 3;       // Adição
let sub = 5 - 3;        // Subtração
let mult = 5 * 3;       // Multiplicação
let div = 6 / 2;        // Divisão
let resto = 5 % 2;      // Resto da divisão



// ------------------------------------------------
// 4) CONDICIONAIS
// ------------------------------------------------

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}



// ------------------------------------------------
// 5) SWITCH
// ------------------------------------------------

let dia = "segunda";

switch (dia) {
    case "segunda":
        console.log("Início da semana");
        break;
    case "sexta":
        console.log("Sextou!");
        break;
    default:
        console.log("Dia comum");
}



// ------------------------------------------------
// 6) LOOPS (LAÇOS DE REPETIÇÃO)
// ------------------------------------------------

// for → repete com contador
for (let i = 0; i < 3; i++) {
    console.log("Número:", i);
}

// while → repete enquanto condição for verdadeira
let contador = 0;
while (contador < 3) {
    console.log("While:", contador);
    contador++;
}



// ------------------------------------------------
// 7) FUNÇÕES
// ------------------------------------------------

// Função tradicional
function saudacao(nome) {
    return "Olá " + nome;
}

console.log(saudacao("Lucas"));

// Arrow Function (forma moderna)
const dobro = (numero) => numero * 2;

console.log(dobro(5));



// ------------------------------------------------
// 8) ARRAY (Lista)
// ------------------------------------------------

let frutas = ["Maçã", "Banana", "Uva"];

console.log(frutas[0]); // Acessa primeiro item

frutas.push("Laranja"); // Adiciona item



// ------------------------------------------------
// 9) OBJETO
// ------------------------------------------------

let pessoa = {
    nome: "Lucas",
    idade: 20,
    cidade: "Recife"
};

console.log(pessoa.nome); // Acessa propriedade



// ------------------------------------------------
// 10) TEMPLATE STRING
// ------------------------------------------------

// Permite inserir variável dentro do texto
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);



// ------------------------------------------------
// 11) COMPARAÇÕES
// ------------------------------------------------

console.log(5 == "5");   // true (compara só valor)
console.log(5 === "5");  // false (compara valor e tipo)



// ------------------------------------------------
// 12) TRY / CATCH (TRATAMENTO DE ERRO)
// ------------------------------------------------

try {
    console.log(variavelQueNaoExiste);
} catch (erro) {
    console.log("Ocorreu um erro:", erro.message);
}



// ------------------------------------------------
// 13) IMPORTANTE: CONSOLE
// ------------------------------------------------

// console.log → imprime no terminal/navegador
// console.error → mostra erro
// console.warn → mostra aviso

console.log("Fim do arquivo 🚀");