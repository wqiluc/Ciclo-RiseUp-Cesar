const mensagem = "Olá, TypeScript";

// Eu consigo mudar?

// mensagem = "Oi";
// Ele não aceita porque eu já defini o "mensagem" como uma const.

function mostrarMensagem(nome="Lucas"){
    console.log(`${nome.toWellFormed()} Está Estudando na Rocket Seat`)
}

mostrarMensagem()