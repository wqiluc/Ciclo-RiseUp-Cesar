// Setinterval() executa uma função após um intervalo de tempo determinado, a diferença é que ele fica executando a cada intervalo!

let valor = 1000;
let numero = 10;
let saudacao = "oi".toWellFormed()

const intervalo = setInterval(() => {
    console.log(`${saudacao}`);

    numero--

    if(numero===0){
        console.log(`Fim do Loop em ${numero+1}s`);
        clearInterval(intervalo);
    }
}, valor);

