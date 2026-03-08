class Produto{
    constructor(nome){
        this.nome = nome;
    }
}

const produto = new Produto("Teclado");

console.log(`O produto é o/a: ${produto.nome}`);