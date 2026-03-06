/* 

 O que é uma Função Construtora?
 
 Uma função construtora é uma função especial em JavaScript que é usada para criar objetos. Ela é chamada com a palavra-chave "new" e tem a capacidade de inicializar as propriedades do objeto criado. As funções construtoras são uma maneira de criar múltiplos objetos com as mesmas propriedades e métodos, sem precisar repetir o código para cada objeto.

*/

function criarProduto(nome, preco, categoria){
    this.nome = nome
    this.preco = preco
    this.categoria = categoria

    this.detalhes = function(){
        console.log(`O nome do produto é ${this.nome}, o preço é ${this.preco} e a categoria é ${this.categoria}`)
        return `O nome do produto é ${this.nome}, o preço é: R$${this.preco} e a categoria é: ${this.categoria}`
    }
}

const produto1 = new criarProduto('Notebook', 3000, 'Eletrônicos')
const produto2 = new criarProduto('Smartphone', 2000, 'Eletrônicos')

console.log(produto1)
console.log(produto2)

produto1.detalhes()
produto2.detalhes()

function criarPessoas(nome)
    this.nome = nome
    this.mensagem = function(){
        console.log(`Olá, meu nome é ${this.nome}`)
        return `Olá, meu nome é ${this.nome}`
    }

const pessoa1 = new criarPessoas('João')
const pessoa2 = new criarPessoas('Maria')

console.log(pessoa1)
console.log(pessoa2)

pessoa1.mensagem()
pessoa2.mensagem()