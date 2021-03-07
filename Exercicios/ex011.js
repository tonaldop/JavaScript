// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

const ladoA = Number(inputt('Largura da parede: '))
const ladoB = Number(inputt('Altura da parede: '))
const area = ladoA * ladoB

console.log(`Sua parede tem dimesnão de ${ladoA} x ${ladoB} e sua área é de ${area}m²`)
console.log(`Para pintar essa parede, você precisará de ${area/2}l de tinta`)
