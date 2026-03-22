/*
 * =================================================
 * GUIA COMPLETO: TIPOS, INFERÊNCIA E O PERIGOSO 'ANY'
 * ================================================= */

// --- 1. TIPAGEM EXPLÍCITA E INFERIDA (Revisão) ---
let usuario: string = "Felipe"; // Explícita
let idades = 25;               // Inferida como number

// --- 2. O TIPO 'ANY' (O "VALE-TUDO") ---
// O 'any' remove a checagem de tipos. É como voltar ao JavaScript puro.
let variavelDinamica: any = "Sou uma string agora";

console.log(`Valor inicial (any): ${variavelDinamica}`);

// Com 'any', o TS permite mudar o tipo sem reclamar:
variavelDinamica = 42; 
console.log(`Mudou para número: ${variavelDinamica}`);

variavelDinamica = { id: 1, nome: "Objeto" };
console.log(`Mudou para objeto: ${variavelDinamica.nome}`);

// --- 3. O PERIGO DO 'ANY' ---
// O TS não te avisa se você tentar acessar algo que não existe:
// variavelDinamica.metodoQueNaoExiste(); // ❌ Isso passaria no TS, mas quebraria o código ao rodar!

// --- 4. INTERPOLAÇÃO COM DIFERENTES TIPOS ---
const statusMatricula: boolean = true;
const curso: any = "TypeScript Avançado"; // any sendo usado (com cautela)

const relatorio = `
--- STATUS DO SISTEMA ---
Estudante: ${usuario}
Idade: ${idades}
Curso Atual: ${curso}
Matriculado: ${statusMatricula ? "Sim" : "Não"}
--------------------------
`;

console.log(relatorio);

/*
 * RESUMO SOBRE O 'ANY':
 * 1. Use apenas em casos extremos (ex: migração de JS para TS ou APIs desconhecidas).
 * 2. Ele "silencia" os erros do TypeScript, o que pode causar bugs no navegador.
 * 3. Se você usa 'any' em tudo, você perde o propósito de usar TypeScript.
 */