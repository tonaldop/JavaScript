// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let distanciaViagem = Number(inputt('Qual distância da viagem? '))
let calculoDistanciaViagem = 0

if (distanciaViagem <= 200) {
    calculoDistanciaViagem = distanciaViagem * 0.5
} else {
    calculoDistanciaViagem = distanciaViagem * 0.45
}

console.log(`Você está prestes a começar uma viagem de ${distanciaViagem}Km`)
console.log(`E o preço da sua passagem será de R$:${calculoDistanciaViagem.toFixed(2)}`)

// em Python fica dessa forma (ternário)
// valor = distancia * 0.50 if distancia <= 200 else distancia * 0.45
