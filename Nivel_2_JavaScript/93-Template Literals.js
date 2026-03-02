/*
========================================================
📚 TEMPLATE LITERALS NO JAVASCRIPT
========================================================

Template Literals (ou Template Strings) são uma forma
mais moderna e poderosa de trabalhar com strings no JS.

Elas foram introduzidas no ES6 (ECMAScript 2015) 🚀

Em vez de usar:
"aspas duplas"
ou
'aspas simples'

Usamos:
`crase` ← (backticks)

Isso permite:
✅ Interpolação de variáveis;
✅ Quebra de linha automática;
✅ Expressões dentro da string;
✅ Criação de templates dinâmicos;
✅ Tagged Templates.

========================================================
1️⃣ Sintaxe Básica
========================================================
*/

const nome = "Lucas";

const mensagem = `Olá, ${nome}! 👋`;

console.log(mensagem);

/*
Explicação 🧠

${} → permite inserir variáveis dentro da string.
Isso se chama INTERPOLAÇÃO.

Antes do ES6, fazíamos assim:

"Olá, " + nome + "!"

Agora ficou muito mais limpo 😎
*/

/*
========================================================
2️⃣ Expressões dentro da String
========================================================
*/

const numero1 = 10;
const numero2 = 5;

const resultado = `A soma é ${numero1 + numero2} 🧮`;

console.log(resultado);

/*
Dentro de ${} podemos colocar:
✅ Variáveis;
✅ Operações matemáticas;
✅ Funções;
✅ Qualquer expressão JavaScript.

Isso torna o código mais dinâmico
*/

/*
========================================================
3️⃣ Múltiplas Linhas (Multi-line Strings)
========================================================
*/

const texto = `
📌 Lista de Tecnologias 💻:
- HTML;
- CSS;
- JavaScript; e
- Node.js.
`;

console.log(texto);

/*
Antes das template literals, para quebrar linha
era necessário usar \n ou concatenar strings.

Agora a quebra de linha acontece naturalmente
usando as crases ` `
*/

/*
========================================================
4️⃣ Criando Templates Dinâmicos
========================================================
*/

const produto = "Notebook";
const preco = 3500;

const card = `
🛒 Produto: ${produto}
💰 Preço: R$ ${preco}
📦 Disponível: ${preco > 0 ? "Sim ✅" : "Não ❌"}
`;

console.log(card);

/*
Aqui usamos:
✅ Interpolação;
✅ Operador ternário;
✅ Template multi-linha.

Muito usado para:
- Criar HTML dinâmico;
- Criar emails automáticos;
- Gerar mensagens personalizadas.
*/

/*
========================================================
5️⃣ Template Literal com Função
========================================================
*/

function saudacao(nome) {
    return `Olá, ${nome}! Seja bem-vindo(a) ao JavaScript 🚀`;
}

console.log(saudacao("Lucas"));

/*
Template literals funcionam perfeitamente
dentro de funções, tornando o retorno mais claro.
*/

/*
========================================================
6️⃣ Tagged Template (Avançado 🧠🔥)
========================================================

Tagged Templates permitem que você processe
uma template literal com uma função especial.
*/

function destacar(strings, ...valores) {
    return strings[0] + valores[0].toUpperCase() + strings[1];
}

const linguagem = "javascript";

const frase = destacar`Eu amo ${linguagem}! ❤️`;

console.log(frase);

/*
Explicação:

A função recebe:
- strings → partes fixas da string
- valores → valores interpolados

Isso permite:
✅ Sanitização;
✅ Formatação automática;
✅ Internacionalização (i18n);
✅ Segurança contra XSS.

É um recurso mais avançado, mas muito poderoso 💪
*/

/*
========================================================
📌 RESUMÃO FINAL:
========================================================

Template Literals servem para:

✅ Interpolar variáveis (${variavel});
✅ Inserir expressões (${2 + 2});
✅ Criar strings multi-linha;
✅ Criar templates dinâmicos;
✅ Usar tagged templates.

Sempre que precisar montar string dinâmica,
prefira usar ` ` ao invés de + concatenação.

Seu código fica:
✅ Mais limpo;
✅ Mais moderno;
✅ Mais profissional.

========================================================
========================================================
*/