// Como obeter o comprimento de uma string em JavaScript?

// Em JavaScript, você pode obter o comprimento de uma string usando a propriedade `length`. A propriedade `length` retorna o número de caracteres presentes na string, incluindo espaços e caracteres especiais.

let mensagem = "Estou estudando os fundamentos do JavaScript!";
let comprimento = mensagem.length;

console.log(`O comprimento da string é: ${comprimento} letras`);

let senha = "12345678";
let comprimentoSenha = senha.length;

if(comprimentoSenha >= 8) {
    console.log(`A senha é forte o suficiente. Ela tem ${comprimentoSenha} caracteres.`);
} else {
    console.log(`A senha é fraca. Ela tem ${comprimentoSenha} caracteres. Por favor, escolha uma senha com pelo menos 8 caracteres.`);
}