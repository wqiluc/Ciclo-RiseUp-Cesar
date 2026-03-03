// CallBack = reChamar/Chamar devolta: é uma função passada para outra função em formato de argumento: 

function executar(nomedaTarefa){
    console.log("Executando a tarefa:", nomedaTarefa);

    reChamada();

}

// Passando p função:
executar("Download do arquivo.".toWellFormed())

function reChamada(){
    console.log("Tarefa Finalizada!! ✅");
}

// Callback com função anônima 🕵️‍♂️:
function executarTarefa(tarefa, callback){
    console.log(`Executando: ${tarefa}`);
    callback();
}

executarTarefa("Backup do sistema", function(){
    console.log("Backup concluído! ✅");
});

// Callback com Arrow Function 🏹:
const processarPedido = (pedido, callback) => {
    console.log(`Processando pedido: ${pedido}`);
    callback();
};

processarPedido("Pedido #1234", () => {
    console.log("Pedido enviado com sucesso! ✅");
});