// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let valor = Number(inputt('Digite um valor: '))
// const porcaoInteira = Math.ceil(valor) // Arredondamento para cima
// const porcaoInteira = Math.floor(valor) // Arredondamento para baixo
// const porcaoInteira = Math.trunc(valor) // Pega a parte inteira apartir da biblioteca Math
const porcaoInteira = parseInt(valor) // Pega a parte inteira, passando o número para int

console.log(`O valor digitado foi ${valor} e sua porção inteira é ${porcaoInteira}`)
