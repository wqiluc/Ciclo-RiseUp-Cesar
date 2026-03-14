const agora = dayjs()

console.log(agora)

const data = dayjs()

console.log(data.format("DD/MM/YYYY"))

const aniversario = dayjs("2005-08-20")

console.log(aniversario.format("DD/MM/YYYY"))


const amanha = dayjs().add(1, "day")

console.log(amanha.format("DD/MM/YYYY"))