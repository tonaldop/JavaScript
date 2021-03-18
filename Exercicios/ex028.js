// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

function getRandomInt(min = 0, max) {
    let numero = Math.random() * ((max + 1) - min) + min
    return parseInt(numero)
}

let lin = ''
console.log(lin.padStart(70, '-='))
console.log('Vou pensr em um número entre 0 e 5. Tente adivinhar.....')
console.log(lin.padStart(70, '-='))

let computador = getRandomInt(0, 5)
let usuario = Number(inputt('Em que número pensei? '))

if (computador === usuario) {
    console.log('PARABÉNS! Você acertou')
} else {
    console.log(`GANHEI! Eu pensei no número ${computador} e não ${usuario}`)
}
