// 🔎 Exemplo: Arrow Function que retorna uma Função Anônima
// Vamos criar uma função que recebe um multiplicador
// e retorna outra função (anônima) que multiplica um número por esse valor.

// Arrow function principal
const criarMultiplicador = (multiplicador) => {

    // 🐞 DEPURAÇÃO 1
    // Verificando se o valor recebido está correto:
    console.log(`Valor recebido (multiplicador): ${multiplicador}`);

    // Retornando uma função anônima
    return function(numero) {

        // 🐞 DEPURAÇÃO 2
        // Verificando o número recebido na função interna
        console.log(`Número recebido: ${numero}`);

        // 🐞 DEPURAÇÃO 3
        // Mostrando o cálculo antes de retornar
        console.log(`Calculando: ${numero} x ${multiplicador}`);

        const resultado = numero * multiplicador;

        // 🐞 DEPURAÇÃO 4
        // Exibindo o resultado antes de retornar
        console.log(`Resultado calculado: ${resultado}`);

        return resultado;
    };
};

// Criando uma nova função baseada na primeira
const multiplicarPor2 = criarMultiplicador(2);

// 🐞 DEPURAÇÃO 5
// Chamando a função retornada
const valorFinal = multiplicarPor2(10);

// 🐞 DEPURAÇÃO 6
// Resultado final exibido
console.log(`Valor final: ${valorFinal}`);