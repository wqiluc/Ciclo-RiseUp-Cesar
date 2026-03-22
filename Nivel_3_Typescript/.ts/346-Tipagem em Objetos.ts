/*
 * =================================================
 * EXPLORANDO OBJETOS E INTERFACES NO TYPESCRIPT
 * ================================================= */

// --- 1. INTERFACE (Definindo o "Contrato" do Objeto) ---
// Interfaces são a forma mais comum de tipar objetos no dia a dia.
interface UsuarioPlataforma {
    nomeUsuario: string;
    idadeUsuario: number;
    emailUsuario: string;
    estaAtivo: boolean;
    telefoneOpcional?: string; // O '?' indica que o campo não é obrigatório
}

// --- 2. IMPLEMENTANDO O OBJETO ---
const novoUsuario: UsuarioPlataforma = {
    nomeUsuario: "Thiago Silva",
    idadeUsuario: 28,
    emailUsuario: "thiago@exemplo.com",
    estaAtivo: true
    // Note que não incluímos o 'telefoneOpcional' e o TS não reclamou.
};

// --- 3. OBJETOS DENTRO DE ARRAYS ---
const listaUsuarios: UsuarioPlataforma[] = [
    novoUsuario,
    {
        nomeUsuario: "Ana Costa",
        idadeUsuario: 22,
        emailUsuario: "ana@dev.com",
        estaAtivo: false
    }
];

// --- 4. INTERPOLAÇÃO COM OBJETOS ---
const informacaoPerfil = `
--- PERFIL DO USUÁRIO ---
Nome: ${novoUsuario.nomeUsuario}
Contato: ${novoUsuario.emailUsuario}
Status: ${novoUsuario.estaAtivo ? "💡 On-line" : "🌙 Off-line"}
Idade: ${novoUsuario.idadeUsuario} anos
-------------------------
`;

console.log(informacaoPerfil);

// --- 5. TIPAGEM DE OBJETO "ON THE FLY" (Inline) ---
// Útil para objetos pequenos e rápidos, sem precisar de uma interface.
const configuracaoSistema: { temaEscuro: boolean; versaoApp: string } = {
    temaEscuro: true,
    versaoApp: "2.1.0"
};

// --- 6. O PERIGO DO OBJETO COM 'ANY' ---
const objetoQualquer: any = { preco: 100 };
// console.log(objetoQualquer.estoque.quantidade); // ❌ ERRO EM RUNTIME: estoque is undefined.
// O TS não te avisa aqui porque você usou 'any'.

/*
 * REGRAS PARA OBJETOS:
 * 1. Sempre prefira 'interface' para definir modelos de dados.
 * 2. Use a interrogação '?' para propriedades que podem ser nulas ou vazias.
 * 3. O TS garante que você não acesse propriedades que não foram mapeadas. */