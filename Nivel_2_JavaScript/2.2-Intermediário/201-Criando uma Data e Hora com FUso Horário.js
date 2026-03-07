function mostrarDataComFuso(data, fuso) {
    const novaData = new Date(data);

    const formatada = novaData.toLocaleString("pt-BR", {
        timeZone: fuso,
        dateStyle: "full",
        timeStyle: "medium"
    });

    return formatada.toWellFormed();
}

const dataComTimeZone = "2023-12-13T16:30:00";

console.log(`Brasil: ${mostrarDataComFuso(dataComTimeZone, "America/Sao_Paulo")}`);
console.log(`Nova York: ${mostrarDataComFuso(dataComTimeZone, "America/New_York")}`);
console.log(`Tóquio: ${mostrarDataComFuso(dataComTimeZone, "Asia/Tokyo")}`);