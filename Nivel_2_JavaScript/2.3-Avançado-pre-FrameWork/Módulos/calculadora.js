function soma(a, b) {
    console.log(`A soma entre ${a} e ${b} é = ${a + b}`);
}

function subtrai(a, b) {
    console.log(`A subtração entre ${a} e ${b} é = ${a - b}`);
}

function multiplica(a, b) {
    console.log(`A multiplicação entre ${a} e ${b} é = ${a * b}`);
}

function divide(a, b) {
    console.log(`A divisão entre ${a} e ${b} é = ${a / b}`);
}

export { soma, subtrai, multiplica, divide };

// Exemplo com Classes:

class Calculadora {

    soma(a, b) {
        console.log(`Soma: ${a + b}`);
    }

    subtrai(a, b) {
        console.log(`Subtração: ${a - b}`);
    }

    multiplica(a, b) {
        console.log(`Multiplicação: ${a * b}`);
    }

    divide(a, b) {
        console.log(`Divisão: ${a / b}`);
    }

}

export default Calculadora;