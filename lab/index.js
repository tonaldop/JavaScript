const inputt = require('prompt-sync')({sigint: true})
// let numeroA = Number(inputt('Digite um número: '))
// let numeroB = Number(inputt('Digite outro número: '))

// let soma = numeroA + numeroB
// let subtracao = numeroA - numeroB
// let multi = numeroA * numeroB
// let divisao = numeroA / numeroB
// console.log(`A soma entre ${numeroA} e ${numeroB} é ${soma}`)
// console.log(`A subtração entre: ${numeroA} e ${numeroB} é ${subtracao}`)
// console.log(`A multiplicação entre ${numeroA} e ${numeroB} é ${multi}`)
// console.log(`A diisão entre ${numeroA} e ${numeroB} é ${divisao}`)

let num = Number(inputt('Digite algo: '))
console.log(Number.isInteger(num))



// parseFloat(numA)
// parseInt(numA)
// formas de passar uma string para número
/*
 Number(string)
  
 */