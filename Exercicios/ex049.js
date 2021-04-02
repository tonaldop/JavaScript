// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let num = parseInt(inputt('Digite um número para ver a sua tabuada: '))

for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`)
}
// Programa de tabuada
