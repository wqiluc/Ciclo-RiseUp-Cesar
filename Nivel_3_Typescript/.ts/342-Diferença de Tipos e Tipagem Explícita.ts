/*
 * =================================================
 * GUIA DE TIPOS E TIPAGEM NO TYPESCRIPT
 * ================================================= */

// --- 1. TIPAGEM EXPLÍCITA (Explicit Typing) ---
// Nós dizemos ao TS exatamente qual é o tipo.
let nome: string = "Felipe";
let idade: number = 25;
let estaEstudando: boolean = true;

// --- 2. INFERÊNCIA DE TIPOS (Implicit Typing) ---
// O TS "adivinha" o tipo pelo valor inicial. 
// Passe o mouse sobre 'linguagem' no seu editor para ver o tipo String.
let linguagem = "TypeScript"; 
let versao = 5.0; 

// --- 3. OUTROS TIPOS PRIMITIVOS ---
let valorNulo: null = null;            // Ausência de valor por escolha
let valorIndefinido: undefined;        // Valor não inicializado
let idUnico: symbol = Symbol("id");    // Identificador único global
let grandeNumero: bigint = 9007199254740991n; // Inteiros massivos

// --- 4. INTERPOLAÇÃO DE STRINGS ---
// Usando Template Literals (crases) para misturar variáveis e texto.
const apresentacao: string = `
--- RELATÓRIO DO ALUNO ---
Nome: ${nome}
Idade: ${idade} anos
Linguagem atual: ${linguagem} na versão ${versao}
Status: ${estaEstudando ? "Ativo" : "Inativo"}
ID Secreto: ${idUnico.toString()}
--------------------------
`;

console.log(apresentacao);

/*
 * --- DIFERENÇA DE TIPOS (ERROS COMUNS) ---
 * O TypeScript impede que você mude o tipo após a definição,
 * seja ela explícita ou por inferência.
 */

// idade = "vinte e cinco"; 
// ❌ ERRO: O tipo 'string' não pode ser atribuído ao tipo 'number'.

// linguagem = 2024;
// ❌ ERRO: Mesmo sem ': string', o TS inferiu o tipo e não deixa mudar para 'number'.

/*
 * DICA: Use a tipagem EXPLICITA em:
 * - Parâmetros de funções
 * - Variáveis que começam vazias
 * * Use a INFERÊNCIA em:
 * - Variáveis simples onde o valor já é atribuído na criação.
 */