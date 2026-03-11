// ===============================
// SHALLOW COPY vs DEEP COPY em JavaScript
// ===============================

// ------------------------------------
// 1️⃣ SHALLOW COPY (Cópia Superficial)
// ------------------------------------

// Shallow Copy cria uma nova estrutura,
// porém os objetos internos continuam
// apontando para a MESMA referência na memória.

// Exemplo de objeto
const usuario1 = {
    nome: "Lucas",
    idade: 20,
    endereco: {
        cidade: "Recife",
        estado: "PE"
    }
};

// Criando uma Shallow Copy usando spread
const usuario2 = { ...usuario1 };

// Alterando um valor interno
usuario2.endereco.cidade = "Olinda";

console.log(usuario1.endereco.cidade); 
// Resultado: "Olinda"

// Isso acontece porque o objeto "endereco"
// ainda é compartilhado entre os dois objetos.

// Outras formas de fazer Shallow Copy:

// Usando Object.assign
const usuario3 = Object.assign({}, usuario1);

// Copiando arrays com spread
const numeros1 = [1, 2, 3];
const numeros2 = [...numeros1];

// ------------------------------------
// 2️⃣ DEEP COPY (Cópia Profunda)
// ------------------------------------

// Deep Copy cria uma cópia COMPLETAMENTE nova,
// incluindo todos os objetos internos.

// Ou seja, nada é compartilhado na memória.

const produto1 = {
    nome: "Notebook",
    preco: 3000,
    fabricante: {
        nome: "Tech Company",
        pais: "Brasil"
    }
};

// Fazendo Deep Copy usando JSON
const produto2 = JSON.parse(JSON.stringify(produto1));

// Alterando valor interno
produto2.fabricante.nome = "Outra Empresa";

console.log(produto1.fabricante.nome);
// Resultado: "Tech Company"

// Agora os objetos são independentes.

// ------------------------------------
// 3️⃣ Método moderno (structuredClone)
// ------------------------------------

// O JavaScript moderno possui uma função
// nativa chamada structuredClone que faz
// Deep Copy corretamente.

const objeto1 = {
    nome: "JavaScript",
    info: {
        tipo: "Linguagem",
        ano: 1995
    }
};

const objeto2 = structuredClone(objeto1);

objeto2.info.ano = 2024;

console.log(objeto1.info.ano);
// Resultado: 1995

// Isso mostra que o objeto foi realmente copiado.