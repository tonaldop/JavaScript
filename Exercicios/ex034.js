// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let valorSalarial = parseFloat(inputt('Qual valor do salário do funcionário? R$: '))
let calculoSalarial = 0

if (valorSalarial <= 1250) {
    calculoSalarial = valorSalarial * 0.15
    // calculoSalarial = valorSalarial * 15 / 100
} else {
    calculoSalarial = valorSalarial * 0.1
    // calculoSalarial = valorSalarial * 10 / 100
}
console.log(`Quem ganha R$:${valorSalarial}, passa a ganhar R$${valorSalarial + calculoSalarial}.`)
