let data = new Date("2024-07-02T14:50:00");

console.log(data);
// Exibe a data e hora no formato local;
console.log(data.toLocaleDateString().toWellFormed());
console.log(data.toLocaleTimeString());

// Exibe no formato ESCOLHIDO!!
console.log(data.toLocaleDateString("en"))