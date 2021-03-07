// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

const temperatura = Number(inputt('Informe temperatura em ºC: '))
const calculoTemperatura = temperatura * (9/5) + 32

console.log(`A temperatura de ${temperatura}ºC corresponde a ${calculoTemperatura}ºF`)
