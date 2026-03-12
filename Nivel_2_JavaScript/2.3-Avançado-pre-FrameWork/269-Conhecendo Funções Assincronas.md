<h1 align="center"> <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="20"> Funções Assíncronas em JavaScript <br>
<img src="../2.3-Avançado-pre-FrameWork/img/fa1.jpeg" width="430"></h1>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-Assíncrono-F7DF1E?style=flat-square&logo=javascript&logoColor=black" height="22"/>
<img src="https://img.shields.io/badge/⚡ Programação-Assíncrona-blue?style=flat-square" height="22"/>
<img src="https://img.shields.io/badge/Nível-Intermediário%20%2F%20Avançado-red?style=flat-square" height="22"/>
</p>

---

<h2 align="center">📖 Introdução: </h2>

Em **JavaScript**, muitas operações levam **tempo para serem concluídas**.

Por exemplo:

- requisições para APIs;
- leitura de arquivos;
- consultas a banco de dados;
- timers e animações.

Essas operações são chamadas de **operações assíncronas**, pois **não bloqueiam a execução do programa**.

📌 Em vez de esperar uma tarefa terminar, o JavaScript **continua executando o restante do código**.

Isso torna as aplicações **mais rápidas e responsivas**.

---

<h2 align="center">⚙️ O que é Assincronicidade? <br>
<img src="../2.3-Avançado-pre-FrameWork/img/fa2.jpeg" width="420"></h2>

A **assincronicidade** permite que tarefas demoradas sejam executadas **em segundo plano**.

Enquanto isso, o restante do código continua sendo executado normalmente.

Exemplo de operação assíncrona:

```js
setTimeout(() => {
    console.log("Executado depois de 2 segundos");
}, 2000);

console.log("Executado imediatamente");
```

Resultado:
```js
Executado imediatamente
Executado depois de 2 segundos
```

O setTimeout não bloqueia o código.

<h2 align="center">🔁 Promises: </h2>
Antes do async/await, JavaScript utilizava Promises para lidar com operações assíncronas.
Uma Promise representa um valor que estará disponível no futuro.
Uma Promise possui três estados:

- pending → aguardando;
- fulfilled → concluída;
- rejected → erro.

Exemplo:

```js
const promessa = new Promise((resolve, reject) => {

    const sucesso = true;

    if(sucesso){
        resolve("Operação realizada com sucesso");
    }else{
        reject("Erro na operação");
    }

});

promessa
.then(resultado => console.log(resultado))
.catch(erro => console.log(erro));
```

<h2 align="center">🚀 Async / Await</h2>

O async/await foi introduzido no ES2017 para tornar código assíncrono mais simples e legível.
Uma função marcada com async sempre retorna uma Promise.
Dentro dela podemos usar await para esperar o resultado de uma Promise.
Exemplo:
```js
async function exemplo(){

    return "Olá mundo";

}

exemplo().then(console.log);
```

<h2 align="center">⏳ Utilizando Await: </h2>
O await pausa a execução somente dentro da função async, aguardando a Promise ser resolvida.
Exemplo simulando requisição:

```js
function esperar(ms){

    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });

}

async function executar(){

    console.log("Iniciando...");

    await esperar(2000);

    console.log("2 segundos depois");

}

executar();
```

<h2 align="center">🧪 Exemplo com API: </h2>
Um uso muito comum de funções assíncronas é buscar dados de APIs.
Exemplo usando fetch:

```js
async function buscarUsuario(){

    const resposta = await fetch("https://jsonplaceholder.typicode.com/users/1");

    const dados = await resposta.json();

    console.log(dados);

}

buscarUsuario();
```

Aqui:
- fetch faz uma requisição HTTP;
- await espera a resposta;

os dados retornam em formato JSON.

<h2 align="center">⚠️ Tratando Erros: </h2>
Quando usamos async/await, o tratamento de erros é feito com try/catch.

```js
Exemplo:
async function buscarDados(){

    try{

        const resposta = await fetch("https://api.exemplo.com");

        const dados = await resposta.json();

        console.log(dados);

    }catch(erro){

        console.log("Erro na requisição");

    }

}

buscarDados();
```

Isso evita que a aplicação quebre caso ocorra um erro na Promise.

<h2 align="center">📂 Vantagens das Funções Assíncronas</h2>
<strong>O uso de programação assíncrona traz vários benefícios:

- melhor desempenho em aplicações web;
- código mais legível com async/await;
- execução não bloqueante;
- facilidade para trabalhar com APIs;
- melhor experiência para o usuário.</strong>

<h2 align="center">🧠 Uso em Projetos Modernos</h2>
Funções assíncronas são extremamente comuns em aplicações modernas.

- Exemplos de uso:
- chamadas para APIs REST;
- carregamento de dados em React;
- comunicação com banco de dados;
- autenticação de usuários;
- upload e download de arquivos.

Frameworks como React, Node.js, Vue e Angular utilizam async/await constantemente.

<h2 align="center">🌋 Assincronicidade e Escalabilidade</h2>
Em aplicações grandes, a programação assíncrona é essencial.
Ela permite:
lidar com milhares de requisições simultâneas;
evitar bloqueios na aplicação;
melhorar desempenho;
construir sistemas escaláveis.
Por isso, dominar funções assíncronas é fundamental no JavaScript moderno.
<h2 align="center">🧪 Exemplo Completo</h2>
function esperar(ms){

    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });

}

async function executar(){

    console.log("Processo iniciado");

    await esperar(2000);

    console.log("Processo finalizado");

}

executar();
Resultado:
Processo iniciado
Processo finalizado