 // Tipo 1
type Pessoa = {
  nome: string
  idade: number
}

// Tipo 2
type Contato = {
  email: string
  telefone: string
}

// Interseção dos dois tipos
// Agora "Usuario" PRECISA ter tudo de Pessoa + Contato
type Usuario = Pessoa & Contato

// Criando um objeto com todas as propriedades
const usuario1: Usuario = {
  nome: "Lucas",
  idade: 20,
  email: "lucas@email.com",
  telefone: "99999-9999"
}

// Função que usa o tipo combinado
function exibirUsuario(usuario: Usuario): void {
  console.log(`Nome: ${usuario.nome}`)
  console.log(`Idade: ${usuario.idade}`)
  console.log(`Email: ${usuario.email}`)
  console.log(`Telefone: ${usuario.telefone}`)
}

exibirUsuario(usuario1)

// Outro exemplo mais interessante:

type Endereco = {
  rua: string
  cidade: string
}

type Funcionario = {
  salario: number
}

// Interseção múltipla (3 tipos)
type FuncionarioCompleto = Pessoa & Endereco & Funcionario

const func1: FuncionarioCompleto = {
  nome: "Maria",
  idade: 30,
  rua: "Rua A",
  cidade: "Recife",
  salario: 3000
}

console.log(func1)

// ⚠️ Observação importante:
// Se houver conflito de tipos, dá erro:

type A = { valor: string }
type B = { valor: number }

// type Erro = A & B:
// ❌ impossível: valor não pode ser string E number ao mesmo tempo