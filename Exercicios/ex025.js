// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let nome = inputt('Qual seu nome completo? ').trim().toLocaleLowerCase()

console.log(`Seu nome tem Silva? ${nome.search('silva')}`)
