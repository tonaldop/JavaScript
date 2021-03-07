// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

nome = inputt('Digite eu nome: ')
console.log(`É um prazer te conhecer, ${nome}!`)
