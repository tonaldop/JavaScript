// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let i = 1
let soma = 0
let cont = 0

for (i; i <= 6; i++) {
    // console.log(i)
    let num = parseInt(inputt(`Digite o ${i}º valor: `))
    if (num % 2 === 0) {
        soma += num  // Acumuladores
        cont ++  // Contadores
    }    
}

console.log(`Você informou ${cont} números pares e a soma foi ${soma}`)
// Desenvolva um programa que leia seis números inteiros e mostre a soma apenas daqueles que forem pares. 
// Se o valor digitado for ímpar, desconsidere-o.
