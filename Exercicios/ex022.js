// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

const nome = inputt('Digite seu nome completo: ').trim()
console.log('Analisando seu nome...')
console.log(`Seu nome em maiúsculas é ${nome.toLocaleUpperCase()}`)
console.log(`Seu nome em minúsculo é ${nome.toLocaleLowerCase()}`)
console.log(`Seu nome tem ao todo ${nome.length} letas`)

let nomeSplit = nome.split(' ') // No JS, tem que dizer onde deve cortar (fazer o split)
// console.log(nome.c)
console.log(`Seu primeiro nome é ${nomeSplit[0]} e tem ${nomeSplit[0].length} letas`)
