// função anônima = função que n possui nome


const mostrarmsg = function(saudacao,nome){
    saudacao = "Olá";
    nome = "Lucas";
    return (`${saudacao}, ${nome}!`);
}
console.log(mostrarmsg());