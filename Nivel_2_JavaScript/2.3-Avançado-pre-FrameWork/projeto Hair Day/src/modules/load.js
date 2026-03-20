export function addAppointment(data) {
  // adiciona o agendamento na lista lateral de `#appointments`
  const list = document.querySelector("#appointments")

  if (!list) return

  const li = document.createElement("li")

  // mostrar hora, nome do cliente e data (se fornecida)
  li.innerHTML = `
    <strong>${data.hour}</strong>
    <span>${data.client}${data.date ? ` — ${data.date}` : ""}</span>
  `

  list.appendChild(li)
}