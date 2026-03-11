// ===============================
// SHALLOW FREEZING em JavaScript ❄️
// ===============================

// Shallow Freezing significa "congelar superficialmente" um objeto.
// Ou seja, o objeto principal fica imutável,
// porém objetos internos ainda podem ser modificados.

// Em JavaScript usamos o método Object.freeze() para isso.

// ------------------------------------
// 1️⃣ Exemplo básico de Shallow Freeze:
// ------------------------------------

const usuario = {
    nome: "Lucas",
    idade: 20
};

// Congelando o objeto🗻
Object.freeze(usuario);

// Tentando alterar propriedades
usuario.nome = "Pedro";
usuario.idade = 30;

console.log(usuario);

// Resultado:
// { nome: "Lucas", idade: 20 }

// As alterações não acontecem porque o objeto foi congelado.

// ------------------------------------
// 2️⃣ Exemplo com objeto aninhado:
// ------------------------------------

const pessoa = {
    nome: "Ana",
    endereco: {
        cidade: "Recife",
        estado: "PE"
    }
};

// Congelando apenas o objeto principal
Object.freeze(pessoa);

// Tentando alterar o objeto interno
pessoa.endereco.cidade = "Olinda";

console.log(pessoa.endereco.cidade);

// Resultado:
// "Olinda"

// Isso acontece porque Object.freeze()
// congela apenas o primeiro nível do objeto.

// ------------------------------------
// 3️⃣ Como fazer um Deep Freeze?
// ------------------------------------

// Para congelar tudo profundamente,
// precisamos congelar também os objetos internos.

const config = {
    app: "Sistema",
    banco: {
        host: "localhost",
        porta: 5432
    }
};

Object.freeze(config);
Object.freeze(config.banco);

config.banco.porta = 3306;

console.log(config.banco.porta);

// Resultado:
// 5432