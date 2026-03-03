/*

    -  Parâmetros: é a variável (escopo da função) que ira retornar um valor em uma função.
    -  Argumento: é o valor passado para a função.

*/


// passando o parâmetro: 'nomedoUsuario'.
function mensagem(nomedoUsuario){
    console.log("Olá,", nomedoUsuario);
}


// passando um argumento.
mensagem("Lucas");

function somaItens(a,b){
    console.log(a+b);
}

somaItens(4,10)