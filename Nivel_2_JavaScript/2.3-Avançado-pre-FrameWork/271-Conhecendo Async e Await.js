// =====================================
// ASYNC E AWAIT EM JAVASCRIPT
// =====================================

// async e await são utilizados para trabalhar
// com Promises de forma mais simples e legível.

// Eles permitem escrever código assíncrono
// parecido com código síncrono.


// =====================================
// 1️⃣ Função async
// =====================================

// Quando uma função é declarada com async,
// ela sempre retorna uma Promise.

async function exemploAsync() {
    return "Olá mundo";
}

// Mesmo retornando um valor simples,
// ele será convertido em Promise.

exemploAsync().then((res) => {
    console.log(res);
});

// =====================================
// 2️⃣ Usando await
// =====================================

// await faz o JavaScript "esperar"
// a Promise ser resolvida.

function esperarTempo() {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Tempo finalizado");
        }, 2000);
    });

}

async function executar() {

    const resultado = await esperarTempo();

    console.log(resultado);
}
executar();


// =====================================
// 3️⃣ Exemplo simulando busca de dados
// =====================================

function buscarUsuario() {

    return new Promise((resolve) => {

        setTimeout(() => {

            const usuario = {
                nome: "Lucas",
                idade: 20
            };

            resolve(usuario);

        }, 1500);

    });
}

async function mostrarUsuario() {

    const usuario = await buscarUsuario();

    console.log("Usuário:", usuario);

}
mostrarUsuario();


// =====================================
// 4️⃣ Tratando erros com try/catch:
// =====================================

function operacaoComErro() {

    return new Promise((resolve, reject) => {

        let erro = true;

        if (erro) {
            reject("Algo deu errado");
        } else {
            resolve("Tudo certo");
        }

    });

}

async function testarErro() {

    try {

        const resultado = await operacaoComErro();
        console.log(resultado);

    } catch (erro) {

        console.log("Erro capturado:", erro);

    }

}
testarErro();

// =====================================
// 5️⃣ Executando várias Promises
// =====================================

function tarefa1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Tarefa 1"), 1000);
    });
}

function tarefa2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Tarefa 2"), 1000);
    });
}

async function executarTarefas() {

    const resultados = await Promise.all([
        tarefa1(),
        tarefa2()
    ]);

    console.log(resultados);

}

executarTarefas();