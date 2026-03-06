// Como separar e unir strings em JavaScript?

// Separando strings
const frase = "Olá, mundo!";
const palavras = frase.split(" ");
console.log(palavras); // ["Olá,", "mundo!"]

// Unindo strings
const palavrasUnidas = palavras.join(" ");
console.log(palavrasUnidas); // "Olá, mundo!"

// Separando por vírgula
const csv = "nome,idade,cidade";
const campos = csv.split(",");
console.log(campos); // ["nome", "idade", "cidade"]

// Unindo com hífen
const camposUnidos = campos.join("-");
console.log(camposUnidos); // "nome-idade-cidade"
