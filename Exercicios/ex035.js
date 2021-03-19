// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let lin = ''
console.log(lin.padStart(70, '--'))
console.log('Analisador de triângulos')
console.log(lin.padStart(70, '--'))

let segmentoA = parseFloat(inputt('Primeiro segmento: '))
let segmentoB = parseFloat(inputt('Segundo segmento: '))
let segmentoC = parseFloat(inputt('Terceiro segmento: '))

// 3 segmentos formam triângulos?
if (segmentoA < segmentoB + segmentoC && segmentoB < segmentoA + segmentoC && segmentoC < segmentoA + segmentoB) {
    console.log('Os segmentos podem formar triângulo!')
} else {
    console.log('Os segmentos NÃO podem formar triângulo!')
}
