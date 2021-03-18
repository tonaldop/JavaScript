// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let numero = parseInt(inputt('Diga me um número qualquer: '))

if (numero % 2 === 0) {
    console.log(`O número ${numero} é PAR`)
} else {
    console.log(`O número ${numero} é IMPAR`)
}
