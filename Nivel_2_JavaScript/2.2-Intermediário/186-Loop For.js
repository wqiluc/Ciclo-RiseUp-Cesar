/* 

Loop For:
O loop for é uma estrutura de controle de fluxo que permite repetir um bloco de código um número específico de vezes. Ele é composto por três partes: a inicialização, a condição e a atualização.

A sintaxe básica do loop for é a seguinte:

for (inicialização; condição; atualização) {
    // código a ser executado
}

*/

for (let indice = 0; indice < 11; indice++) {
    console.log(`Valor do contador: ${indice}`);
}

// Exemplo com a tabuada do 7:

let numero = 7;

for (let indiceTabuada = 1; indiceTabuada <= 10; indiceTabuada++) {
    resultado = numero * indiceTabuada;
    console.log(`\n${numero} x ${indiceTabuada} = ${resultado}`);
}
