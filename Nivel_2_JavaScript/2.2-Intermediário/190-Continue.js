// Continue em JavaScript

// O continue é usado dentro de estruturas de repetição (for, while, etc)
// Ele faz o loop pular a iteração atual e continuar para a próxima.

for (let indice = 1; indice <= 10; indice++) {
    if (indice % 2 === 0) {
        continue;
    }
    // Esse código só será executado se o número NÃO for par
    console.log(`Número ímpar: ${indice}`);
}