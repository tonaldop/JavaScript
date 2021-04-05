// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let nome = inputt('Digite um nome: ').trim().toLocaleUpperCase()
let inverso = ''
let separado = nome.split(' ')
let junto = separado.join('')
// console.log(separado)
// console.log(junto)

for (let i = nome.length - 1; i >= 0; i--) {
    inverso = inverso.concat(nome[i]).trim()
}

console.log(`O inverso de ${junto} é ${inverso}`)
if (inverso === junto) {
    console.log('Temos um palíndromo!')
} else {
    console.log('A frase digitada não é um palíndromo!')
}
