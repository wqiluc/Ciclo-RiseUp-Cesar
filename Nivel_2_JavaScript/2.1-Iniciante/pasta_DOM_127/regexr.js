// 1️⃣ Verificar se existe a palavra "javascript" na frase
let frase = "Eu estou estudando JavaScript";
let regex1 = /javascript/i; // "i" = ignora maiúsculas/minúsculas

console.log(regex1.test(frase)); 
// true ✅


// 2️⃣ Validar se contém apenas números
let numero = "123456";
let regex2 = /^[0-9]+$/; 
// ^  = início da string
// [0-9] = números de 0 a 9
// + = um ou mais
// $ = fim da string

console.log(regex2.test(numero)); 
// true ✅


// 3️⃣ Extrair todos os números de um texto
let texto = "Tenho 2 gatos e 3 cachorros";
let regex3 = /\d+/g; 
// \d = qualquer número
// +  = um ou mais
// g  = global (pega todos)

console.log(texto.match(regex3)); 
// ["2", "3"] ✅


// 4️⃣ Validar um email simples
let email = "teste@email.com";
let regex4 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(regex4.test(email)); 
// true ✅


// 5️⃣ Substituir espaços por hífen
let nome = "Lucas Paguetti Pereira";
let regex5 = /\s+/g; 
// \s = espaço
// +  = um ou mais
// g  = global

console.log(nome.replace(regex5, "-")); 
// Lucas-Paguetti-Pereira ✅


// 6️⃣ Verificar se começa com "http"
let url = "https://google.com";
let regex6 = /^http/;

console.log(regex6.test(url)); 
// true ✅


// 7️⃣ Capturar palavras com 4 letras
let frase2 = "Casa azul céu mar";
let regex7 = /\b\w{4}\b/g;
// \b = limite de palavra
// \w = letras/números/_
// {4} = exatamente 4 caracteres

console.log(frase2.match(regex7)); 
// ["Casa", "azul"] ✅