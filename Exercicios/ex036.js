// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let valorCasa = Number(inputt('Valor da casa R$: '))
let salario = Number(inputt('Salário do comprador R$: '))
let financiamento = Number(inputt('Tempo de financiamento (anos): '))

let calculo = (valorCasa / (financiamento * 12))
// console.log(calculo)
// console.log(salario * 0.30)

if (salario * 0.3 >= calculo) {
    console.log('Empréstimo APROVADO!')
    console.log(`Para pegar uma casa de ${valorCasa} em ${financiamento}anos a prestação ficará de R$${calculo}`)
} else {
    console.log('Empréstimo NEGADO!')
}
