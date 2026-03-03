// ============================================
// 📘 Comentários de Documentação (JSDoc)
// ============================================
// São comentários especiais usados para
// documentar funções, parâmetros e retornos.
// Eles ajudam editores como o VS Code
// a mostrar dicas automáticas (IntelliSense).
// ============================================



/**
 * 🔢 Função que soma dois números
 * @param {number} a - Primeiro número
 * @param {number} b - Segundo número
 * @returns {number} Retorna a soma dos dois números
 */
function somar(a, b) {
    return a + b;
}

let resultado = somar(10, 5);
console.log(`Resultado da soma: ${resultado}`);

// --------------------------------------------

/**
 * 👤 Função que cria uma saudação personalizada
 * @param {string} nome - Nome da pessoa
 * @param {number} idade - Idade da pessoa
 * @returns {string} Retorna uma frase formatada
 */
function saudacao(nome, idade) {
    return `Olá ${nome}, você tem ${idade} anos!`;
}

let mensagem = saudacao("Lucas", 20);
console.log(mensagem);

// --------------------------------------------

/**
 * 🔍 Função que verifica se um número é par
 * @param {number} numero - Número a ser verificado
 * @returns {boolean} Retorna true se for par, false se for ímpar
 */
function ehPar(numero) {
    return numero % 2 === 0;
}

console.log(`10 é par? ${ehPar(10)}`);
console.log(`7 é par? ${ehPar(7)}`);

// ============================================
// 🧠 Tags mais usadas no JSDoc:
// ============================================
//
// @param   → descreve um parâmetro
// @returns → descreve o que a função retorna
// @type    → define o tipo de uma variável
// @example → mostra exemplo de uso
//
// ============================================

/**
 * 📦 Exemplo com @example
 * @param {number} x
 * @param {number} y
 * @returns {number}
 * @example
 * multiplicar(2, 3) // retorna 6
 */
function multiplicar(x, y) {
    return x * y;
}

console.log(`Multiplicação: ${multiplicar(2, 3)}`);