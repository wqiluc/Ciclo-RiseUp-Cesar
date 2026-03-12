// Uma Promise representa um valor que pode estar
// disponível agora, no futuro ou nunca.

// Estados de uma Promise:
// pending  -> pendente
// fulfilled -> resolvida com sucesso
// rejected -> rejeitada com erro

// =====================================
// 1️⃣ Criando uma Promise
// =====================================

const minhaPromise = new Promise((resolve, reject) => {

    let sucesso = true;

    if (sucesso) {
        resolve("Operação concluída com sucesso");
    } 
    else {
        reject("Erro na operação");
    }

});

// =====================================
// 2️⃣ Consumindo uma Promise
// =====================================

minhaPromise
.then((resultado) => {
    console.log(resultado);
})
.catch((erro) => {
    console.log(erro);
});

// =====================================
// 3️⃣ Exemplo prático simulando requisição
// =====================================

function buscarUsuario() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const usuario = {
                nome: "Lucas",
                idade: 20
            };

            resolve(usuario);

        }, 2000);

    });

}

buscarUsuario()
.then((usuario) => {
    console.log("Usuário encontrado:", usuario);
})
.catch((erro) => {
    console.log("Erro:", erro);
});

// =====================================
// 4️⃣ Encadeamento de Promises (Chaining)
// =====================================

function passo1() {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Passo 1 concluído");
        }, 1000);
    });

}

function passo2() {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Passo 2 concluído");
        }, 1000);
    });

}

passo1()
.then((resultado) => {
    console.log(resultado);
    return passo2();
})
.then((resultado) => {
    console.log(resultado);
});

// =====================================
// 5️⃣ Promise.resolve()
// =====================================

const promessaRapida = Promise.resolve("Resposta imediata");

promessaRapida.then((res) => {
    console.log(res);
});

// =====================================
// 6️⃣ Promise.reject()
// =====================================

const erroRapido = Promise.reject("Erro imediato");

erroRapido.catch((erro) => {
    console.log(erro);
});

// =====================================
// 7️⃣ Promise.all()
// =====================================
// Executa várias Promises ao mesmo tempo
// e retorna quando TODAS terminarem

const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
.then((resultados) => {
    console.log("Resultados:", resultados);
});

// =====================================
// 8️⃣ Promise.race()
// =====================================
// Retorna a Promise que terminar primeiro

const lenta = new Promise((resolve) => {
    setTimeout(() => resolve("Lenta"), 2000);
});

const rapida = new Promise((resolve) => {
    setTimeout(() => resolve("Rápida"), 500);
});

Promise.race([lenta, rapida])
.then((resultado) => {
    console.log("Primeira concluída:", resultado);
});