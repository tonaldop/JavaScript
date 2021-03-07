// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let notaA = inputt('Primeira nota do aluno: ')
let notaB = inputt('Segunda nota do aluno: ')
let media = (parseFloat(notaA) + parseFloat(notaB)) / 2 // Colocando em ordem de precedência

console.log(`A média entre ${notaA} e ${notaB} é igual a ${media}`)
