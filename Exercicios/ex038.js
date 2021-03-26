// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let numero1 = Number(inputt('Primeiro número: '))
let numero2 = Number(inputt('Segundo número: '))

if (numero1 > numero2) {
    console.log('o PRIMEIRO é maior.')
} else if (numero1 === numero2) {
    console.log('Os dois valores SÃO IGUAIS.')
} else {
    console.log('O SEGUNDO é maior.')
}
