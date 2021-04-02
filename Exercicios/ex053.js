// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let nome = inputt('Digite um nome: ').trim()
let inverso = ''

for (let i = nome.length - 1; i >= 0; i--) {
    inverso = inverso.concat(nome[i]).trim()
}
console.log(`O inverso de ${nome.toLocaleUpperCase()} é ${inverso.toLocaleUpperCase()}`)