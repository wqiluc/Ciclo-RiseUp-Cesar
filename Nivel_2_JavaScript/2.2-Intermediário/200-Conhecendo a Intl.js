import chalk from "chalk"

// 🌍 Fusos Horários usando a API Intl + cores com Chalk

const agora = new Date()

console.log(chalk.blue.bold("\n🌐 Demonstração de Fusos Horários com Intl API\n"))

console.log(chalk.yellow("Data padrão do sistema:"))
console.log(chalk.white(agora))

console.log(chalk.yellow("\nTimestamp atual:"))
console.log(chalk.green(Date.now()))

console.log(chalk.gray("\n========================================\n"))

// 🇧🇷 Brasil
const brasil = new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "full",
  timeStyle: "long",
  timeZone: "America/Sao_Paulo"
})

console.log(chalk.green.bold("🇧🇷 Brasil (São Paulo)"))
console.log(chalk.white(brasil.format(agora)))

console.log(chalk.gray("\n----------------------------------------\n"))

// 🇺🇸 Estados Unidos
const eua = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
  timeStyle: "long",
  timeZone: "America/New_York"
})

console.log(chalk.blue.bold("🇺🇸 Estados Unidos (Nova York)"))
console.log(chalk.white(eua.format(agora)))

console.log(chalk.gray("\n----------------------------------------\n"))

// 🇬🇧 Londres
const londres = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "full",
  timeStyle: "long",
  timeZone: "Europe/London"
})

console.log(chalk.magenta.bold("🇬🇧 Reino Unido (Londres)"))
console.log(chalk.white(londres.format(agora)))

console.log(chalk.gray("\n----------------------------------------\n"))

// 🇯🇵 Japão
const japao = new Intl.DateTimeFormat("ja-JP", {
  dateStyle: "full",
  timeStyle: "long",
  timeZone: "Asia/Tokyo"
})

console.log(chalk.red.bold("🇯🇵 Japão (Tóquio)"))
console.log(chalk.white(japao.format(agora)))

console.log(chalk.gray("\n========================================\n"))

console.log(chalk.cyan("✅ Demonstração concluída\n"))