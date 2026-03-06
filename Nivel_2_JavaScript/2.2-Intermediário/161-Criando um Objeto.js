/*

OBJETO:
 Um objeto é uma coleção de propriedades, onde cada propriedade é definida por um par chave-valor. Ele pode conter dados e funções, permitindo a criação de estruturas complexas e reutilizáveis.

*/

const objetodeExemplo = { };
console.log(objetodeExemplo);// Imprime um objeto vazio: {}
console.log(typeof objetodeExemplo); // Imprime "object", indicando que é um objeto

const usuarioA = {
    nome: {
        primeiro: "Lucas",
        sobrenome: "Paguetti Pereira"
    },
    adress: {
        email: "lpp2@cesar.school",
        telefone: "81 9 8886-2967",
        rua: "Rua do Futuro, 123",
        cidade: "Recife",
        estado: "PE",
        cep: "12345-678"
    },
    idade: 30,
    mensagem: () => {
        console.log("Olá, meu nome é " + usuarioA.nome.primeiro + " " + usuarioA.nome.sobrenome + " e tenho " + usuarioA.idade + " anos.");
    }
};
