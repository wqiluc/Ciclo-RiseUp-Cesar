class MeuErroCustomizado{
    constructor(mensagem){
        this.mensagem = "Classe de Erro Customizada: " + `${mensagem}`
    }
}

try{
    throw new MeuErroCustomizado("Erro Personalizado lançado 🚀");
} catch (error) {

    if(error instanceof MeuErroCustomizado){
        console.log(error.mensagem);
    } else{
        console.log("Não foi possível executar o erro");
    }
}