// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

const distancia = Number(inputt('Uma distância em metros: '))
console.log(`A media ${distancia}m corresponde: `)
console.log(`${distancia / 1000} - Kilômetros`)
console.log(`${distancia / 100}hm - Hectômetro`)
console.log(`${distancia / 10}dam - Decâmetro`)

console.log(`${distancia} - Metro`)
console.log(`${distancia * 10} - Decimetro`)
console.log(`${distancia * 100} - Centimetro`)
console.log(`${distancia * 1000} - Milimetro`)