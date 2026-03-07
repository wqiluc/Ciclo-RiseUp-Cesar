// Adicionando e Removendo um Item do Array

let usuarios = [ ]
console.log(usuarios)
console.log(usuarios.length)

usuarios.push("Maria")
console.log(`Agora, temos ${usuarios.length} usuário(s) no array.`)

usuarios.push("João")
console.log(`Agora, temos ${usuarios.length} usuário(s) no array.`)

usuarios.unshift("Ana")
console.log(`Agora, temos ${usuarios.length} usuário(s) no array.`)

usuarios.pop() // remove o último item do array
console.log(`Agora, temos ${usuarios.length} usuário(s) no array.`)

usuarios.shift() // remove o primeiro item do array
console.log(`Agora, temos ${usuarios.length} usuário(s) no array.`)