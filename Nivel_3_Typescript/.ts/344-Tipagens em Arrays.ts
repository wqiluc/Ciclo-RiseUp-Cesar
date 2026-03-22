/*
 * =================================================
 * EXPLORANDO ARRAYS E TIPAGEM NO TYPESCRIPT
 * ================================================= */

// --- 1. DECLARAÇÃO DE ARRAYS ---

// Forma 1: Tipo[] (Mais comum e recomendada)
let frutas: string[] = ["Maçã", "Banana", "Uva"];
let numeros: number[] = [10, 20, 30.5];

// Forma 2: Array<Tipo> (Generic Type)
let idadesUsuarios: Array<number> = [25, 30, 40];

// --- 2. ARRAY COM 'ANY' (Cuidado!) ---
// Permite misturar qualquer tipo na mesma lista (perde a segurança)
let listaMista: any[] = ["Texto", 123, true, { id: 1 }];

// --- 3. INFERÊNCIA EM ARRAYS ---
const nomes = ["Ana", "Bia", "Caio"]; // O TS infere como string[]
// nomes.push(10); // ❌ ERRO: O TS sabe que só aceita strings aqui.

// --- 4. INTERPOLAÇÃO COM ARRAYS ---
const usuarios = "Felipe";
const hobbies: string[] = ["Codar", "Academia", "Games"];

const mensagemHobby = `
Usuário: ${usuarios}
Primeiro Hobby: ${hobbies[0]}
Total de Hobbies: ${hobbies.length}
Lista Completa: ${hobbies.join(", ")}
`;

console.log(mensagemHobby);

// --- 5. ARRAYS DE LEITURA (Readonly) ---
// Útil para listas que não podem ser modificadas (sem push ou pop)
const coordenadas: readonly number[] = [10, 20];
// coordenadas.push(30); // ❌ ERRO: Propriedade 'push' não existe em 'readonly number[]'.

/*
 * RECAPITULANDO:
 * - string[] : Apenas textos.
 * - number[] : Apenas números.
 * - any[] : Vale-tudo (evite!).
 * - join() : Ótimo método para usar na interpolação e exibir a lista como texto. */