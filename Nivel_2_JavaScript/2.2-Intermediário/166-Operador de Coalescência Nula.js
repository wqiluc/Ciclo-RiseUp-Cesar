/* 

O operador de coalescência nula (??) é um operador lógico que retorna o valor do seu operando do lado direito quando o valor do operando do lado esquerdo é null ou undefined, caso contrário, retorna o valor do operando do lado esquerdo.

Exemplos:

*/

let couteudo = null;
console.log(couteudo ?? "Valor padrão\n"); // Saída: "Valor padrão"

const usuario = {
    nome: "Lucas",
    foto: undefined}

console.log(usuario.foto ?? "Default.jpeg"); // Saída: "Default.jpeg"

