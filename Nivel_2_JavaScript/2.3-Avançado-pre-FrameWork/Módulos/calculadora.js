export function soma(a, b) {
    const resultado = a + b;
    console.log(`A soma entre ${a} e ${b} é = ${resultado}`);
    return resultado;
}

export function subtrai(a, b) {
    const resultado = a - b;
    console.log(`A subtração entre ${a} e ${b} é = ${resultado}`);
    return resultado;
}

export function multiplica(a, b) {
    const resultado = a * b;
    console.log(`A multiplicação entre ${a} e ${b} é = ${resultado}`);
    return resultado;
}

export function divide(a, b) {
    if (b === 0) {
        console.log("Não é possível dividir por zero");
        return null;
    }

    const resultado = a / b;
    console.log(`A divisão entre ${a} e ${b} é = ${resultado}`);
    return resultado;
}