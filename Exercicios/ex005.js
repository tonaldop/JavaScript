// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

const numero = Number(inputt('Digite um número: ')) // Converte de str para int
const antecessor = numero - 1
const sucessor = numero + 1

console.log(`Analisando o valor ${numero}, seu antecessor é ${antecessor} e o seu sucessor é ${sucessor}`)
