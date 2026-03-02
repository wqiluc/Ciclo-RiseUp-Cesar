// if (se)

let saldoUsuario = 30;
let pagamentoUsuario = 20;

if (pagamentoUsuario>=saldoUsuario){
    console.log(`O usuário não tem saldo o suficiente para efetuar o pagamento.❌\n
    Saldo do Usuário: ${saldoUsuario}\n
    Pagamento: ${pagamentoUsuario}\n
    Total Restante: R$ ${saldoUsuario-pagamentoUsuario}`);
}

let hora_reuniao;
hora_reuniao = 20; // 20:00h da noite


if(hora_reuniao===20){
    console.log("Está na hora da reunião!! ✅");
}
