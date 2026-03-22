/*
 * =================================================
 * UNION TYPES - FLEXIBILIDADE COM SEGURANÇA
 * ================================================= */

// 1. VARIÁVEIS COM MÚLTIPLOS TIPOS
// A variável 'chaveAcesso' pode ser um número (ID) ou uma string (Token)
let chaveAcesso: number | string;

chaveAcesso = 101;      // ✅ Válido
chaveAcesso = "ABC-123"; // ✅ Válido
// chaveAcesso = true;   // ❌ Erro: 'boolean' não é 'number' nem 'string'

// 2. ARRAYS COM TIPOS MISTOS (MAS CONTROLADOS)
// Diferente do 'any[]', aqui só aceitamos números ou booleanos
const notasOuStatus: (number | boolean)[] = [10, 7.5, true, 5, false];

// 3. UNION TYPES EM FUNÇÕES E "TYPE GUARDING"
// Quando usamos Union, o TS nos obriga a verificar o tipo antes de agir
function formatarPreco(valor: number | string): string {
    if (typeof valor === "number") {
        // Aqui dentro o TS sabe que 'valor' é estritamente um número
        return `R$ ${valor.toFixed(2)}`;
    }
    // Aqui o TS sabe que sobrou apenas a opção de ser string
    return `R$ ${valor.toUpperCase()}`;
}

// 4. LITERAL TYPES COM UNION (Muito Útil!)
// Você limita a variável a valores específicos, não apenas ao tipo
type StatusEntrega = "pendente" | "enviado" | "entregue";

let situacaoAtual: StatusEntrega = "pendente";
// situacaoAtual = "cancelado"; // ❌ Erro: "cancelado" não faz parte do Union

// 5. INTERPOLAÇÃO COM UNION TYPES
const identificadorPedido: string | number = "PED-99";
const estaPago: boolean | string = "Processando";

const logPedido = `
--- DETALHES DO PEDIDO ---
ID: ${identificadorPedido}
Pagamento: ${typeof estaPago === "boolean" ? (estaPago ? "Confirmado" : "Pendente") : estaPago}
Preço Formatado: ${formatarPreco(150.5)}
--------------------------
`;

console.log(logPedido);

/*
 * REGRAS DE OURO:
 * 1. Union Types são escritos com a barra vertical '|'.
 * 2. Use 'typeof' ou 'instanceof' para "estreitar" (narrowing) o tipo dentro da lógica.
 * 3. São excelentes para lidar com respostas de APIs que podem retornar o dado ou um erro/nulo. */