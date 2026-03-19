import dayjs from "dayjs"

const form = document.querySelector("form")

const inputData = document.querySelector("#data")

form.onsubmit = (event) => {
    event.preventDefault()

    const hoje = dayjs()
    const dataSelecionada = dayjs(inputData.value)

    if (dataSelecionada.isBefore(hoje, "day")) {
        console.log("Escolha hoje ou uma data futura")
        return
    }


    let mensagem = "Enviado✅"
    console.log(`${mensagem.toWellFormed()} - ${dataSelecionada.format("DD/MM/YYYY")}`)
}