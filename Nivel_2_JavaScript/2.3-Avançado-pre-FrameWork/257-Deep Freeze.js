// ===============================
// DEEP FREEZE em JavaScript❄️🗻
// ===============================

// Deep Freeze significa congelar um objeto
// completamente, incluindo todos os objetos
// e arrays internos.

// Diferente do Object.freeze() comum,
// que congela apenas o primeiro nível,
// o Deep Freeze percorre todo o objeto
// e congela cada propriedade.

// ------------------------------------
// 1️⃣ Exemplo do problema com freeze normal:
// ------------------------------------

const usuario = {
    nome: "Lucas",
    endereco: {
        cidade: "Recife",
        estado: "PE"
    }
};

Object.freeze(usuario);

// tentativa de alteração
usuario.nome = "Pedro";
usuario.endereco.cidade = "Olinda";

console.log(usuario.nome);
console.log(usuario.endereco.cidade);

// Resultado:
// nome não muda;
// cidade muda.

// ------------------------------------
// 2️⃣ Criando uma função Deep Freeze:
// ------------------------------------

function deepFreeze(obj) {

    Object.keys(obj).forEach((prop) => {

        if (typeof obj[prop] === "object" 
            && 
            obj[prop] !== null 
            &&
            !Object.isFrozen(obj[prop])
        ) {
            deepFreeze(obj[prop]);
        }

    });

    return Object.freeze(obj);
}

// ------------------------------------
// 3️⃣ Usando Deep Freeze:
// ------------------------------------

const configuracao = {
    sistema: "App",
    banco: {
        host: "localhost",
        porta: 5432
    },
    usuarios: ["admin", "editor"]
};

deepFreeze(configuracao);

// tentativas de alteração
configuracao.sistema = "NovoApp";
configuracao.banco.porta = 3306;
configuracao.usuarios.push("novo");

console.log(configuracao);

// ------------------------------------
// 4️⃣ Resultado
// ------------------------------------

// Nenhuma alteração acontece,
// pois todos os níveis do objeto
// foram congelados.