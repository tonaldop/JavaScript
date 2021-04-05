// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let arrays_peso = []
for (let k = 1; k <= 5; k++) {
    let peso = parseFloat(inputt(`Peso da ${k}º pessoa: `))
    arrays_peso.push(peso)
}

arrays_peso.sort((a, b) => a - b);

console.log(`O maior peso lido foi de ${arrays_peso[4]}Kg.`)
console.log(`O menor peso lido foi de ${arrays_peso[0]}Kg.`)
