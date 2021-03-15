// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

const catetoOposto = Number(inputt('Comprimento do cateto oposto: '))
const catetoAdjacente = Number(inputt('Comprimento do cateto adjacente: '))

const calculoHipotenusa = Math.hypot(catetoOposto, catetoAdjacente) // calculo pela biblioteca Math
const calculoHipotenusaManual = (catetoOposto ** 2 + catetoAdjacente ** 2) ** 0.5 // calculo manual

console.log(`A hipotenusa vai medir ${calculoHipotenusa.toFixed(2)}`)
console.log(`A hipotenusa vai medir ${calculoHipotenusaManual.toFixed(2)}`)
