// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let valorA = Number(inputt('Digite primeiro valor: '))
let valorB = Number(inputt('Digite segundo valor: '))
let valorC = Number(inputt('Digite terceiro valor: '))
let menorValor = valorA
let maiorValor = valorA

// testando o menor valor
if (valorB < valorA && valorB < valorC) {
    menorValor = valorB
}

if (valorC < valorA && valorC < valorB) {
    menorValor = valorC
}

// testando o maior valor
if (valorB > valorA && valorB > valorC) {
    maiorValor = valorB
}

if (valorC > valorA && valorC > valorB) {
    maiorValor = valorC
}

console.log(`O menor valor digitado foi ${menorValor}`)
console.log(`O maior valor digitado foi ${maiorValor}`)
