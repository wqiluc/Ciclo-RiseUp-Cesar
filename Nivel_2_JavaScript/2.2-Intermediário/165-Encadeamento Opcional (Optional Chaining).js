/* 

    Optional Chaining é um recurso do JavaScript que permite acessar propriedades de objetos de forma segura, evitando erros quando uma propriedade não existe ou é nula/indefinida. Ele utiliza o operador `?.` para verificar se a propriedade existe antes de tentar acessá-la.

    Exemplo de uso:

*/

/* 

Optional Chaining é um recurso do JavaScript que permite acessar propriedades de objetos de forma segura, evitando erros quando uma propriedade não existe ou é nula/indefinida. Ele utiliza o operador `?.` para verificar se a propriedade existe antes de tentar acessá-la.

Exemplo de uso:

*/

const usuario = {
    /*id: 1,
    nome: "Lucas",
    endereco: {
        rua: "Av. Brasil",
        cidade: "São Paulo",
        geoLocalizacao: {
            lat: -23.5505,
            lng: -46.6333
        }
    },*/
    mensagem: function() {
        return `Olá, meu nome é ${this.nome}`;
    }
};

console.log(usuario.endereco?.rua); // undefined, sem erro
console.log(usuario.endereco?.geoLocalizacao?.lat); // undefined, sem erro
console.log(usuario.mensage?.()); // Olá, meu nome é undefined