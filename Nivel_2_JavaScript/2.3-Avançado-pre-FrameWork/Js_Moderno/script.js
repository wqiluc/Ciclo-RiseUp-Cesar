// O strict mode (modo estrito): ativando esse modo, 
// os erros que eram silenciosos 
// passam a gerar exceções no Javascript.

"Use Strict"

function mostrarMsg(){
    nomedePessoa = "Lucas Paguetti";
};

console.log("Olá,", mostrarMsg);

mostrarMsg();

class Estudante{
    get ponto(){
        return 7;}
}

let estudante = new Estudante();
console.log(estudante.ponto)

// Tentando deletar uma propriedade de um objeto que não posso deletar:
// delete window.document é impossível


// Tentando criar uma função que soma dois números iguais, mas retorna erro porque dois deles são iguais 
/*
function soma(a,a,c){
    return a + a + c;
}
*/

//////////////////////////////////////

// destructuring assignment (desestruturação) permite extrair dados de arrays ou objetos em variáveis distintas.