const mostrarData = function(data) {
    const dataFormatada = data.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });

    return `A data formatada é ${dataFormatada}`;
};

const agora = new Date();
console.log(mostrarData(agora));