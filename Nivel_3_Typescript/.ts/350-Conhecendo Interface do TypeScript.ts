// Nesse repositório, estamos utilizando o VS code,
// no entanto, A trilha usa o site: https://www.typescriptlang.org/play/

interface Usuario {
  id: number
  nome: string
  email: string
  ativo: boolean
}

interface Admin extends Usuario {
  permissao: string
}

function exibirUsuario(usuario: Usuario): void {
  console.log(`ID: ${usuario.id}`)
  console.log(`Nome: ${usuario.nome}`)
  console.log(`Email: ${usuario.email}`)
  console.log(`Ativo: ${usuario.ativo}`)
}

const user1: Usuario = {
  id: 1,
  nome: "Lucas",
  email: "lucas@email.com",
  ativo: true
}

const admin1: Admin = {
  id: 2,
  nome: "Maria",
  email: "maria@email.com",
  ativo: true,
  permissao: "total"
}

exibirUsuario(user1)
exibirUsuario(admin1)