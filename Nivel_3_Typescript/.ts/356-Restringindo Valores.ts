 // =========================================
 // RESTRINGINDO VALORES EM TYPESCRIPT
 // =========================================

 // Podemos restringir valores usando tipos literais
 // Ou seja, o valor só pode ser exatamente aquele definido

 // =========================================
 // STRING LITERAL TYPES
 // =========================================

type Status = "sucesso" | "erro" | "carregando"

let estado: Status

estado = "sucesso"      // ✔ válido
estado = "erro"         // ✔ válido
// estado = "falha"     // ❌ erro: não permitido

 // =========================================
 // NUMBER LITERAL TYPES
 // =========================================

type Nota = 0 | 1 | 2 | 3 | 4 | 5

let avaliacao: Nota

avaliacao = 5           // ✔ válido
// avaliacao = 6        // ❌ erro

 // =========================================
 // BOOLEAN LITERAL (menos comum)
 // =========================================

type Verdadeiro = true

let ativo: Verdadeiro

ativo = true            // ✔
// ativo = false        // ❌

 // =========================================
 // COMBINANDO COM OBJETOS
 // =========================================

type Usuario = {
  nome: string
  perfil: "admin" | "user" | "visitante"
}

const user1: Usuario = {
  nome: "Lucas",
  perfil: "admin"       // ✔ válido
}

 // =========================================
 // USANDO COM FUNÇÕES
 // =========================================

function setStatus(status: "online" | "offline") {
  console.log(status)
}

setStatus("online")     // ✔
// setStatus("ocupado") // ❌ erro

 // =========================================
 // USANDO "AS CONST"
 // =========================================

 // sem "as const", vira string[]
const cores = ["vermelho", "azul"]

 // com "as const", vira valores fixos
const coresFixas = ["vermelho", "azul"] as const

// type: readonly ["vermelho", "azul"]

 // =========================================
 // EXTRA: RESTRINGINDO COM TYPE + INTERSEÇÃO
 // =========================================

type ID = string & { readonly brand: unique symbol }

// usado para "simular" tipos mais restritos
// ex: diferenciar IDs mesmo sendo string