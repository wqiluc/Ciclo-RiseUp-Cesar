//Quais elementos o Array aceita?

let meuArray = ["texto", 123, true, null, undefined, 
    { nome: "João" }, [1, 2, 3], function() { return "Olá"; }];

console.log(meuArray[0]); // "texto"
console.log(meuArray[1]); // 123
console.log(meuArray[2]); // true
console.log(meuArray[3]); // null
console.log(meuArray[4]); // undefined
console.log(meuArray[5]); // { nome: "João" }
console.log(meuArray[6]); // [1, 2, 3]
console.log(meuArray[7]()); // "Olá"

// O Array em JavaScript é muito flexível e pode conter elementos de diferentes tipos, incluindo strings, números, booleanos, null, undefined, objetos, arrays e funções.