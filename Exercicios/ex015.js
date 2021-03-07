// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

const dias = Number(inputt('Quantos dias alugado? '))
const km = Number(inputt('Quantos Km rodado? '))
const calculo = km * 0.15 + (60 * dias)

console.log(`O total a pagar é de R$${calculo.toFixed(2)}`)
