let novaData = new Date("June 2, 2026 14:30:59")

// Modificar a data (ano, mês, dia, hora...):
novaData.setFullYear(2027);
novaData.setMonth(3);
novaData.setMinutes(15);

console.log(`A nova data é: ${novaData.toLocaleString("pt-BR")}`);
