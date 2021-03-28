// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let ano_nascimento = parseInt(inputt('Ano de nascimento: '))
let ano_atual = new Date().getFullYear()
let idade = ano_atual - ano_nascimento

console.log(`O atleta tem ${idade} anos.`)
if (idade <= 9) {
    console.log('Classificação: MIRIM')
} else if (idade <= 14) {
    console.log('Classificação: INFANTIL')
} else if (idade <= 19) {
    console.log('Classificação: JÚNIOR')
} else if (idade <= 25) {
    console.log('Classificação: SÊNIOR')
} else {
    console.log('Classificação: MASTER')
}
