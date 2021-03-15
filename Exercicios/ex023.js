// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let numero = inputt('Digite um número: ')

let unidade = numero.charCodeAt([0, 2])
console.log(unidade)
