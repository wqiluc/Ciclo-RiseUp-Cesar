/*Day.js em JavaScript

=================================================
Biblioteca: Day.js
Uso: Manipulação de datas e horários em JavaScript
Ambiente: Node.js
=================

1. Instalação

No terminal do projeto execute:

npm install dayjs

---

2. Importando a biblioteca

import dayjs from "dayjs"

---

3. Criando datas

const agora = dayjs()

console.log("Objeto Day.js:")
console.log(agora)

---

4. Formatando datas

const dataAtual = dayjs()

console.log("Formato brasileiro:", dataAtual.format("DD/MM/YYYY"))
console.log("Formato ISO:", dataAtual.format("YYYY-MM-DD"))
console.log("Hora:", dataAtual.format("HH:mm:ss"))

---

5. Adicionando tempo

const hoje = dayjs()

const amanha = hoje.add(1, "day")
const semanaQueVem = hoje.add(7, "day")
const umMes = hoje.add(1, "month")

console.log("Amanhã:", amanha.format("DD/MM/YYYY"))
console.log("Semana que vem:", semanaQueVem.format("DD/MM/YYYY"))
console.log("Daqui um mês:", umMes.format("DD/MM/YYYY"))

---

6. Subtraindo tempo

const ontem = hoje.subtract(1, "day")
const semanaPassada = hoje.subtract(7, "day")

console.log("Ontem:", ontem.format("DD/MM/YYYY"))
console.log("Semana passada:", semanaPassada.format("DD/MM/YYYY"))

---

7. Comparando datas

const data1 = dayjs("2026-03-10")
const data2 = dayjs("2026-03-13")

console.log("data1 é antes de data2:", data1.isBefore(data2))
console.log("data2 é depois de data1:", data2.isAfter(data1))
console.log("datas são iguais:", data1.isSame(data2))

---

8. Diferença entre datas

const inicio = dayjs("2026-03-01")
const fim = dayjs("2026-03-13")

const diferencaDias = fim.diff(inicio, "day")

console.log("Diferença em dias:", diferencaDias)

---

9. Trabalhando com horas

const agoraHora = dayjs()

const daquiDuasHoras = agoraHora.add(2, "hour")
const menosTrintaMin = agoraHora.subtract(30, "minute")

console.log("Hora atual:", agoraHora.format("HH:mm:ss"))
console.log("Daqui 2 horas:", daquiDuasHoras.format("HH:mm:ss"))
console.log("30 minutos atrás:", menosTrintaMin.format("HH:mm:ss"))

---

10. Exemplo prático

const prazoEntrega = dayjs("2026-04-01")
const hojeSistema = dayjs()

const diasRestantes = prazoEntrega.diff(hojeSistema, "day")

console.log("Dias restantes para entrega:", diasRestantes)

---

Resumo

Day.js permite:

criar datas;
formatar datas;
somar ou subtrair tempo;
comparar datas;
calcular diferença entre datas.

Ele é uma alternativa leve para bibliotecas antigas como Moment.js.*/ 
