// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let numA = inputt('Digite um valor: ')
let numB = inputt('Digite outro valor: ')
let soma = Number(numA) + Number(numB) // Converter de string para número

console.log(`A soma entre ${numA} e ${numB} é igual a ${soma}!`)
