const numeros = [1, 2, 3, 4, 5]

const map = numeros.map(n => n * 2)
console.log(`map: ${map}`)

const filter = numeros.filter(n => n % 2 === 0)
console.log(`filter: ${filter}`)

const reduce = numeros.reduce((total, n) => total + n, 0)
console.log(`reduce: ${reduce}`)

numeros.forEach(n => console.log(`forEach: ${n}`))

const find = numeros.find(n => n > 3)
console.log(`find: ${find}`)

const findIndex = numeros.findIndex(n => n === 3)
console.log(`findIndex: ${findIndex}`)