// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let segmentoA = parseFloat(inputt('Primeiro segmento: '))
let segmentoB = parseFloat(inputt('Segundo Segmento: '))
let segmentoC = parseFloat(inputt('Terceiro segmento: '))

// 3 segmentos formam triângulos?
if (segmentoA < segmentoB + segmentoC && segmentoB < segmentoA + segmentoC && segmentoC < segmentoA + segmentoB) {
    
    let nome = ''
    if (segmentoA === segmentoB && segmentoB === segmentoC) {
        nome = 'EQUILÁTERO'
    } else if (segmentoA !== segmentoB && segmentoB !== segmentoC && segmentoA !== segmentoC) {
        nome = 'ESCALENO'
    } else {
        nome = 'ISÓCELES'
    }
    console.log(`Os segmentos PODEM FORMAR um triângulo ${nome}!`)
} else{
    console.log('Os segmentos NÃO podem formar triângulo!')
}
