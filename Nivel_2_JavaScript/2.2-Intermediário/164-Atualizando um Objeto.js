const produto = {
    nome: "Teclado",
    quantidade: 100,
}

console.log(`o Nome do produto é ${produto.nome}`) // Teclado
console.log(`a Quntidade inicial do produto: ${produto.nome} é: ${produto.quantidade}`) // 100;

// atualizando o valor da propriedade nome:
produto.quantidade = 50;
console.log(`a Quntidade atual do produto: ${produto.nome} é: ${produto.quantidade}`) // 50;