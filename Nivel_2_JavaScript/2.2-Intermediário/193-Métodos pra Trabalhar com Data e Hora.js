let data = new Date("2024-07-02T14:30:10");
console.log(data);
// Pega o dia da semana, contando de 0 = Domingo até 6 = Sábado
console.log(data.getDay());

// Dia do mês = 0->30
console.log(data.getDate());

// Mês: 0 até 11
console.log(data.getMonth());

// Ano
console.log(data.getFullYear());

// e assim em diante, vários outros métodos.