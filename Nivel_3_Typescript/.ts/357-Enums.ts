 // =========================================
 // ENUM EM TYPESCRIPT
 // =========================================

 // Enum é usado para criar um conjunto de valores nomeados
 // Serve para restringir e organizar constantes

 // =========================================
 // ENUM NUMÉRICO (PADRÃO)
 // =========================================

enum Status {
  Pendente,   // 0
  Aprovado,   // 1
  Rejeitado   // 2
}

let estado: Status

estado = Status.Pendente   // ✔
estado = Status.Aprovado   // ✔

 // =========================================
 // ENUM NUMÉRICO CUSTOMIZADO
 // =========================================

enum Codigo {
  Sucesso = 200,
  Erro = 500
}

let resposta: Codigo = Codigo.Sucesso

 // =========================================
 // ENUM STRING
 // =========================================

enum Perfil {
  Admin = "ADMIN",
  User = "USER",
  Visitante = "VISITANTE"
}

let usuarioPerfil: Perfil = Perfil.Admin

 // =========================================
 // USANDO EM OBJETOS
 // =========================================

type Usuario = {
  nome: string
  perfil: Perfil
}

const user1: Usuario = {
  nome: "Lucas",
  perfil: Perfil.User
}

 // =========================================
 // USANDO EM FUNÇÕES
 // =========================================

function verificarPerfil(perfil: Perfil) {
  if (perfil === Perfil.Admin) {
    console.log("Acesso total")
  }
}

verificarPerfil(Perfil.Admin)

 // =========================================
 // ENUM REVERSO (NUMÉRICO)
 // =========================================

 // Apenas enums numéricos têm mapeamento reverso

console.log(Status[0]) // "Pendente"

 // =========================================
 // CUIDADOS
 // =========================================

 // Enum numérico aceita número diretamente

estado = 1   // ⚠️ permitido (pode ser perigoso)

 // Enum string NÃO aceita valores fora

// usuarioPerfil = "ADMIN" // ❌ erro

 // =========================================
 // ALTERNATIVA MODERNA (UNION TYPES)
 // =========================================

type StatusAlt = "pendente" | "aprovado" | "rejeitado"

let estado2: StatusAlt = "pendente"

 // Mais simples e comum hoje em dia