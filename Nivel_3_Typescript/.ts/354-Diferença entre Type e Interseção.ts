 // =========================================
 // TYPE vs INTERSEÇÃO (&) EM TYPESCRIPT
 // =========================================

 // "type" é usado para CRIAR um tipo
 // Ele define a estrutura de dados

type Pessoa = {
  nome: string
  idade: number
}

 // Outro tipo separado

type Contato = {
  email: string
  telefone: string
}

 // Interseção (&)
 // Serve para JUNTAR tipos
 // O novo tipo precisa ter TODAS as propriedades

type Usuario = Pessoa & Contato

 // Aqui, Usuario tem:
 // nome, idade, email e telefone

const usuario1: Usuario = {
  nome: "Lucas",
  idade: 20,
  email: "lucas@email.com",
  telefone: "99999-9999"
}

 // =========================================
 // DIFERENÇA NA PRÁTICA
 // =========================================

 // type -> define um tipo
 // & -> combina tipos

type A = { x: number }
type B = { y: number }

 // Aqui estamos CRIANDO tipos (A e B)
 // Aqui estamos COMBINANDO eles

type C = A & B

const exemplo: C = {
  x: 10,
  y: 20
}

 // =========================================
 // REGRA IMPORTANTE
 // =========================================

 // Interseção exige que TODOS os campos existam

// const erro: C = { x: 10 } 
// ❌ erro: falta o "y"

 // =========================================
 // CONFLITO DE TIPOS
 // =========================================

type D = { valor: string }
type E = { valor: number }

 // type F = D & E
 // ❌ erro: impossível
 // "valor" não pode ser string E number ao mesmo tempo