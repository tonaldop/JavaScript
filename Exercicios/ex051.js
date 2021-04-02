// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let lin = ''
let texto = ''
console.log(lin.padStart(50, '='))
console.log('               10 TERMOS DE UMA PA')
console.log(lin.padStart(50, '='))

let termo = parseInt(inputt('Primeiro termo: '))
let razao = parseInt(inputt('Razão: '))

for (let i = 0; i < 10; i++) {
    texto += `${termo + razao * i} → `
}

texto = texto + 'Acabou'
console.log(texto)
// Desenvolva um programa que leia o primeiro termo e a razão de uma PA. 
// No final, mostre os 10 primeiros termos dessa progressão.
