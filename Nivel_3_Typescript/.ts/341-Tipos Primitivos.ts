/* TIPOS PRIMITIVOS NO TYPESCRIPT */

// 1. Boolean: Valores lógicos (verdadeiro ou falso)
const estaAtivo: boolean = true;
const possuiDesconto: boolean = false;

// 2. Number: Representa números inteiros, decimais, hexadecimais, etc.
const idade: number = 28;
const preco: number = 99.90;
const temperatura: number = -5;

// 3. String: Textos de qualquer tamanho
const nome: string = "Lucas";
const profissão: string = 'Desenvolvedor';

// 4. Null e Undefined: Ausência de valor
// Geralmente usados para inicializar variáveis que receberão dados depois
let valorNulo: null = null;
let valorIndefinido: undefined = undefined;

// 5. Symbol: Usado para criar identificadores únicos (menos comum no dia a dia)
const idUnico: symbol = Symbol("id");

// 6. BigInt: Para números inteiros muito grandes (acima de 2^53 - 1)
const numeroGigante: bigint = 9007199254740991n;

/*
 * INTERPOLAÇÃO DE STRINGS (Template Literals)
 * Usamos a crase ( ` ) e a sintaxe ${variável} */

const resumoUsuario: string = `\nOlá, meu nome é ${nome}. 
Tenho ${idade} anos e atualmente trabalho como ${profissão}.
Status do sistema: ${estaAtivo ? "Operacional" : "Desligado"}.`;

console.log(resumoUsuario.toWellFormed());