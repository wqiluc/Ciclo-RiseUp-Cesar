 // Interface base
interface Veiculo {
  marca: string
  modelo: string
  ano: number
}

// Interface estendendo Veiculo
interface Carro extends Veiculo {
  portas: number
  tipoCombustivel: string
}

// Interface estendendo Veiculo
interface Moto extends Veiculo {
  cilindradas: number
}

// Função que aceita qualquer Veiculo
function exibirVeiculo(veiculo: Veiculo): void {
  console.log(`Marca: ${veiculo.marca}`)
  console.log(`Modelo: ${veiculo.modelo}`)
  console.log(`Ano: ${veiculo.ano}`)
}

// Criando um objeto do tipo Carro
const carro1: Carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  portas: 4,
  tipoCombustivel: "Flex"
}

// Criando um objeto do tipo Moto
const moto1: Moto = {
  marca: "Honda",
  modelo: "CB500",
  ano: 2021,
  cilindradas: 500
}

// Usando a função com objetos diferentes
exibirVeiculo(carro1)
exibirVeiculo(moto1)

// Acessando propriedades específicas
console.log(`Portas do carro: ${carro1.portas}`)
console.log(`Cilindradas da moto: ${moto1.cilindradas}`)