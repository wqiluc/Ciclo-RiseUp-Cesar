// >, <, ==

let saldoUsuario = 500;
let pagamentoUsario = 120;

if (saldoUsuario>=pagamentoUsario){
    console.log(`O usuário consegue realizar a compra!✅ e ainda lhe sobrará: R$${saldoUsuario-pagamentoUsario}`);
}
else{
    console.log(`O usuário não possuí dinheiro suficiente para realizar o pagamento 💰❌. ele possui: ${saldoUsuario} e o valor da compra é de: ${pagamentoUsario}`)
}