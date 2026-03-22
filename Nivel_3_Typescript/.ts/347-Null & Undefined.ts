/*
 * =================================================
 * NULL, UNDEFINED E TIPAGEM COMPOSTA EM TYPESCRIPT
 * ================================================= */

// --- 1. CONCEITOS BÁSICOS ---

// Undefined: A variável foi declarada, mas nenhum valor foi atribuído ainda.
// É o valor padrão do JavaScript para variáveis vazias.
let dadoNaoDefinido: undefined = undefined;

// Null: Representa a ausência INTENCIONAL de um valor. 
// Você diz ao código: "Eu sei que isso deveria ter um valor, mas agora está vazio".
let dadoNulo: null = null;

// --- 2. UNION TYPES (Onde o null/undefined brilha) ---
// Na vida real, uma variável pode começar nula e depois virar outro tipo.
let idUsuario: number | null = null; 

// Simulando uma busca no banco de dados
idUsuario = 1024; 

// --- 3. PARÂMETROS E PROPRIEDADES OPCIONAIS ---
interface PerfilUsuario {
    nomeCompleto: string;
    biografia?: string; // O '?' torna o campo string | undefined
}

const usuarioUm: PerfilUsuario = { nomeCompleto: "Felipe Silva" };
// usuarioUm.biografia aqui é 'undefined'

// --- 4. INTERPOLAÇÃO E CHECAGEM ---
const sistemaOperacional: string | null = null;

const statusSistema = `
--- STATUS DO DISPOSITIVO ---
Sistema: ${sistemaOperacional ?? "Nenhum sistema instalado"}
Nota: O operador '??' (Nullish Coalescing) ajuda a lidar com null/undefined.
-----------------------------
`;

console.log(statusSistema);

// --- 5. FUNÇÕES QUE PODEM RETORNAR NULO ---
function buscarProduto(idProduto: number): string | null {
    if (idProduto === 1) {
        return "Teclado Mecânico";
    }
    return null; // Retorna null se não encontrar nada
}

const produtoEncontrado = buscarProduto(2);
console.log(`Produto: ${produtoEncontrado?.toUpperCase() ?? "Não disponível"}`);

/*
 * REGRAS DE OURO:
 * 1. 'undefined' = O sistema ainda não preencheu (vazio por padrão).
 * 2. 'null' = O desenvolvedor limpou o valor (vazio por escolha).
 * 3. Use 'strictNullChecks' no tsconfig.json para o TS te obrigar a tratar esses casos. */