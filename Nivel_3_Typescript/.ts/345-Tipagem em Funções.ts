/*
 * =================================================
 * GUIA: TIPAGEM EM FUNÇÕES NO TYPESCRIPT
 * ================================================= */

// --- 1. FUNÇÃO COM TIPAGEM EXPLÍCITA ---
// (parâmetro: tipo): tipoDoRetorno
function calcularMedia(notaUm: number, notaDois: number): number {
    return (notaUm + notaDois) / 2;
}

const resultadoMedia = calcularMedia(8.5, 7.0);

// --- 2. ARROW FUNCTIONS TIPADAS ---
const saudarUsuario = (nomeUsuario: string, horaAtual: number): string => {
    const saudacao = horaAtual < 12 ? "Bom dia" : "Boa tarde";
    return `${saudacao}, ${nomeUsuario}!`;
};

// --- 3. FUNÇÕES SEM RETORNO (VOID) ---
// Usado quando a função faz algo (ex: log) mas não devolve nenhum valor.
function exibirLog(mensagemAlerta: string): void {
    console.warn(`[LOG]: ${mensagemAlerta}`);
}

// --- 4. PARÂMETROS OPCIONAIS (?) ---
// O 'sobrenome' pode ou não ser enviado.
function formatarNome(primeiroNome: string, sobrenome?: string): string {
    return sobrenome ? `${primeiroNome} ${sobrenome}` : primeiroNome;
}

// --- 5. INTERPOLAÇÃO COM RESULTADOS DE FUNÇÕES ---
const listaDeCompras: string[] = ["Monitor", "Teclado", "Mouse"];
const usuarioAtivo: string = "Felipe";

const resumoPedido = `
--- RESUMO DO PEDIDO ---
Cliente: ${formatarNome(usuarioAtivo, "Silva")}
Saudação: ${saudarUsuario(usuarioAtivo, 14)}
Itens no Carrinho: ${listaDeCompras.join(", ")}
Total de Itens: ${listaDeCompras.length}
------------------------
`;

console.log(resumoPedido);

// --- 6. FUNÇÃO COM 'ANY' (EVITE SE POSSÍVEL) ---
function processarDadoGenerico(valorQualquer: any): any {
    return valorQualquer;
}

/*
 * REGRAS DE OURO PARA FUNÇÕES:
 * 1. Sempre tente tipar o retorno (facilita a leitura do código).
 * 2. Parâmetros opcionais sempre devem vir por último.
 * 3. Use 'void' para funções que apenas executam ações (como salvar no banco ou printar) */