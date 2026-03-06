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


// Acessando as propriedades do objeto

console.log(usuarioA.nome.primeiro); // Imprime "Lucas"
console.log(usuarioA.nome.sobrenome); // Imprime "Paguetti Pereira"
console.log(usuarioA.adress.email); // Imprime "lpp2@cesar.school"
console.log(usuarioA.adress.telefone); // Imprime "81 9 8886-2967"
console.log(usuarioA.adress.rua); // Imprime "Rua do Futuro, 123"
console.log(usuarioA.adress.cidade); // Imprime "Recife"
console.log(usuarioA.adress.estado); // Imprime "PE"
console.log(usuarioA.adress.cep); // Imprime "12345-678"
console.log(usuarioA.idade); // Imprime 30
console.log(usuarioA["idade"]); // Imprime 30
console.log(usuarioA["adress"]["cidade"]); // Imprime "Recife"