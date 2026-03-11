// Imutabilidade em JS

const endereco1 = {
    rua: "AV. Brasil",
    numero: 20,
};

// Isso NÃO é uma cópia. É apenas uma referência ao mesmo objeto
// const endereco2 = endereco1;
// endereco2.numero = 30;

// Aqui estamos criando uma cópia do objeto usando Spread (opção 1)
const endereco2 = { ...endereco1 };
endereco2.numero = 30;

// Aqui também poderíamos criar o objeto já alterando uma propriedade
// const endereco2 = { ...endereco1, numero: 30 };

console.log(endereco1);
console.log(endereco2);