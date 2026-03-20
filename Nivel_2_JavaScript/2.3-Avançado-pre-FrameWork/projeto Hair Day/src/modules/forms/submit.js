import dayjs from "../../js/libs/dayjs.js"

import { addAppointment } from "../load.js"

const form = document.querySelector(".form")

const client = document.querySelector("#client")

const date = document.querySelector("#date")

const hoursList = document.querySelectorAll(".hour.hour-available")

let selectedHour = null

// permitir selecionar um horário clicando na listagem
hoursList.forEach((hourEl) => {
  hourEl.addEventListener("click", () => {
    // desmarca qualquer seleção anterior
    document.querySelectorAll(".hour.hour-selected").forEach((el) => el.classList.remove("hour-selected"))
    hourEl.classList.add("hour-selected")
    selectedHour = hourEl.getAttribute("value") || hourEl.textContent.trim()
  })
})

form.onsubmit = async (event) => {
  event.preventDefault()

  const agora = dayjs()

  const inicioAtendimento = dayjs().hour(8).minute(0)
  const fimAtendimento = dayjs().hour(21).minute(0)

  if (agora.isBefore(inicioAtendimento) || agora.isAfter(fimAtendimento)) {
    alert("Fora do horário de atendimento")
    return
  }

  if (!selectedHour) {
    alert("Por favor selecione um horário disponível")
    return
  }

  if (!client.value) {
    alert("Informe o nome do cliente")
    return
  }

  const appointment = {
    id: new Date().getTime(),
    client: client.value,
    date: date.value, // espera YYYY-MM-DD
    hour: selectedHour
  }

  try {
    const res = await fetch("http://localhost:3333/schedules", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appointment)
    })

    if (!res.ok) throw new Error(`Erro na requisição: ${res.status}`)

    const created = await res.json()

    // atualizar UI localmente
    addAppointment({ hour: created.hour, client: created.client, date: created.date })

    // limpar form
    client.value = ""
    date.value = ""
    document.querySelectorAll(".hour.hour-selected").forEach((el) => el.classList.remove("hour-selected"))
    selectedHour = null

    alert("Agendamento criado com sucesso")
  } catch (err) {
    console.error(err)
    alert("Não foi possível criar o agendamento. Verifique se a API está em execução em http://localhost:3333 e tente novamente.")
  }
}