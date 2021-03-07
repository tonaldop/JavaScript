// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let salario = Number(inputt('Qual salário do funcionário? R$: '))
let calculo = salario * 0.15 + salario

console.log(`Funcionário que ganha R$${salario.toFixed(2)}, com 15% de aumento, passa a receber R$${calculo.toFixed(2)}`)
