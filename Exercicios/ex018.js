// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

const angulo = Number(inputt('Digite o ângulo que você deseja: '))

// o ângulo tem que está em radianos
// convertendo de ângulo para radianos: (angulo * PI) / 180

let seno = Math.sin(angulo * Math.PI / 180)
let cosseno = Math.cos(angulo * Math.PI / 180)
let tangente = Math.tan(angulo * Math.PI / 180)

console.log(`O ângulo de ${angulo} tem o SENO de ${seno.toFixed(2)}`)
console.log(`O ângulo de ${angulo} tem o COSSENO de ${cosseno.toFixed(2)}`)
console.log(`O ângulo de ${angulo} tem a TANGENTE de ${tangente.toFixed(2)}`)
