// While = excecuta um bloco de código enquanto uma condição for verdadeira

/* while (condicao){

    // código a ser executado

} */


let idadeUsuario = 15;    
while (idadeUsuario < 18) {
    let resposta = prompt("Você é menor de idade, mesmo assim deseja continuar? (sim/não)");
    if (resposta.toLowerCase() === "sim") {
        alert("Você pode continuar, mas tenha cuidado!");
    } else {
        alert("Encerrando o programa. Volte quando tiver 18 anos.");
        break; // Encerra o loop se o usuário não quiser continuar
    }
}