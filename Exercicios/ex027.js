// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let nome = inputt('Digite seu nome completo: ').trim()
nome = nome.split(" ")

console.log('Muito prazer em te conhecer!')
console.log(`Seu primeiro nome é ${nome[0]}\nSeu último nome é ${nome[nome.length - 1]}`)
