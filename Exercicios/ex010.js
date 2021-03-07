// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

const dinheiro = parseFloat(inputt('Quanto de dinheiro você tem? R$ '))
const valorDolar = 3.27
const calculo = dinheiro / valorDolar

console.log(`Com R$ ${dinheiro}, você pode comprar U$ ${calculo.toFixed(2)}`)
