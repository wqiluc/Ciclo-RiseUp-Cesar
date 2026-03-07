// Formatando uma Data e uma Hora em JS

let dataNova = new Date("2024-07-02T14:30:59");

console.log(dataNova);

// Função arrow para sempre deixar com 2 dígitos
const formatarDoisDigitos = (valor) => valor.toString().padStart(2, "0");

let dia = formatarDoisDigitos(dataNova.getDate());
let mes = formatarDoisDigitos(dataNova.getMonth() + 1);
let ano = dataNova.getFullYear();
let hora = formatarDoisDigitos(dataNova.getHours());
let minuto = formatarDoisDigitos(dataNova.getMinutes());
let segundo = formatarDoisDigitos(dataNova.getSeconds());

console.log(`${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`);