console.log("📦 Objetos em JavaScript")

const pessoa = {
  nome: "Lucas",
  idade: 25,
  profissao: "Desenvolvedor"
}

console.log("Objeto:", pessoa)

console.log("Acessando propriedade (ponto):", pessoa.nome)
console.log("Acessando propriedade (colchetes):", pessoa["idade"])

const usuario = {
  nome: "Lucas",
  saudacao() {
    return "Olá, " + this.nome
  }
}

console.log("Método do objeto:", usuario.saudacao())

const carro = {
  marca: "Toyota"
}

carro.modelo = "Corolla"
carro.ano = 2024

console.log("Objeto com novas propriedades:", carro)

const produto = {
  nome: "Notebook",
  preco: 3000,
  estoque: true
}

delete produto.estoque

console.log("Objeto após delete:", produto)

const aluno = {
  nome: "Lucas",
  idade: 21,
  curso: "Programação"
}

console.log("Percorrendo objeto:")
for (let chave in aluno) {
  console.log(chave, aluno[chave])
}

const usuarioEndereco = {
  nome: "Lucas",
  endereco: {
    cidade: "Recife",
    estado: "PE"
  }
}

console.log("Objeto dentro de objeto:", usuarioEndereco.endereco.cidade)