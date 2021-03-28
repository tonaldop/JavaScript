// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let peso = parseFloat(inputt('Qual é seu peso? (Kg) '))
let altura = parseFloat(inputt('Qual é sua altura? (m) '))
let imc = peso / (altura ** 2)

console.log(`O IMC dessa é de ${imc.toFixed(1)}`)

if (imc < 18.5) {
    console.log('Você está ABAIXO do peso normal.')
} else if (imc <= 25) {
    console.log('PARABÉNS, você está na faixa de peso NORMAL.')
} else if (imc <= 30) {
    console.log('Você está em SOBREPESO.')
} else if (imc <= 40) {
    console.log('Você está em OBESIDADE.')
} else {
    console.log('Você está em OBESIDADE MÓRBIDA, cuidado.')
}
