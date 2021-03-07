// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

const numero = Number(inputt('Digite um número: '))
const dobro = numero * 2
const triplo = numero * 3
const raiz = Math.sqrt(numero) // Usando a biblioteca "Math" p/ fazer o calculo
const raizManual = numero ** (1/2) // Calculando manual: elevando o numero a potencia de meio (1/2)

console.log(`O dobro de ${numero} vale ${dobro}`)
console.log(`O triplo de ${numero} vale ${triplo}`)
console.log(`A raiz quadrada de ${numero} é igual a ${raiz.toFixed(2)}`)
console.log(`A raiz quadrada de ${numero} é igual a ${raizManual.toFixed(2)}`)

