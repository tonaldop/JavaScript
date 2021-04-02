// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let num = parseInt(inputt('Digite um números: '))
let i = 1
let cont = 0
let texto = ''

for (i; i <= num; i++) {
    // console.log(i)
    texto += `${i} `
    if (num % i === 0) {
        cont ++
    }    
}

console.log(texto)
console.log(`O número ${num} foi divisivel ${cont} vezes`)
if (cont === 2) {
    console.log(`E por isso ele é primo!`)
} else {
    console.log(`E por isso ele Não é primo!`)
}
// Faça um programa que leia um número inteiro e diga se ele é ou não um número primo.
