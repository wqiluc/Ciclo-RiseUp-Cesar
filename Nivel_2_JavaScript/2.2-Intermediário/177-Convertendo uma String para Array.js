let nomeCompleto = "Lucas Paguetti Pereira";
console.log(nomeCompleto);
console.log(nomeCompleto.split(" ")); // O método split() divide uma string em um array de substrings, usando um separador especificado. Neste caso, o separador é um espaço (" "), o que resulta em um array de palavras.

// Cria um Array com os caracteres da string
console.log(Array.from(nomeCompleto.split(""))); // O método Array.from() cria uma nova instância de Array a partir de um objeto semelhante a um array ou iterável. Neste caso, ele cria um array onde cada elemento é um caractere da string "Lucas Paguetti Pereira".