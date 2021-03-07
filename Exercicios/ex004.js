// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let nome = inputt('Digite algo: ')

console.log(`O tipo primitivo desse valor é: ${typeof nome}`)
console.log(`So tem espaços? ${nome === " "}`)
console.log(`É um número? ${Number.isInteger(Number(nome))}`)
// console.log(`É alfabético?`)
console.log(`Está em maiúsculas? ${!nome.toLocaleUpperCase()}`)
console.log(`Está em minúsculas? ${!nome.toLocaleLowerCase()}`)
// console.log(`Está capitalizado?`)
console.log(nome.toString().trim())
