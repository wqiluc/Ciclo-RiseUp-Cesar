// Verificando se um conteúdo existe no Array em JavaScript

let frutas = ["maçã", "banana", "laranja", "uva"];

// Verificar se a fruta "banana" existe no array
let frutaProcurada = "banana";
let existeFruta = frutas.includes(frutaProcurada);
console.log(`A fruta "${frutaProcurada}" existe no array? ${existeFruta}`);
if (existeFruta) {
    console.log(`A fruta "${frutaProcurada}" foi encontrada no array!`);
} else {
    console.log(`A fruta "${frutaProcurada}" não foi encontrada no array.`);
}

//você pode usar indexOf para verificar se a fruta existe
let indiceFruta = frutas.indexOf(frutaProcurada);
if (indiceFruta !== -1) {
    console.log(`A fruta "${frutaProcurada}" foi encontrada no array no índice ${indiceFruta}!`);
} else {
    console.log(`A fruta "${frutaProcurada}" não foi encontrada no array.`);
}