xj// Primeiro comando executado de forma síncrona.
// Tudo que está no escopo principal roda primeiro na Call Stack.
console.log(1);

// queueMicrotask adiciona uma função na fila de MICROTASKS.
// Microtasks possuem prioridade maior que macrotasks.
queueMicrotask(() => {
    console.log(2);
});

// Variável usada para o tempo do setTimeout
let tempo = 1000;

// setTimeout adiciona uma função na fila de MACROTASKS (Timers).
// Mesmo com 0ms ou 1000ms, ele nunca executa imediatamente,
// apenas depois que a Call Stack estiver vazia e após as microtasks.
setTimeout(() => {
    console.log(3);
}, tempo);

// Código síncrono continua executando normalmente
console.log(4);

// Promise.resolve cria uma Promise já resolvida.
// O .then() é colocado na fila de MICROTASKS.
Promise.resolve(true).then(() => {
    console.log(5);
});
