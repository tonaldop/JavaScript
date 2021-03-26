// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let notaA = parseFloat(inputt('Primeira nota: '))
let notaB = parseFloat(inputt('Segunda nota: '))
let media = (notaA + notaB) / 2

console.log(`Tirando ${notaA.toFixed(1)} e ${notaB.toFixed(1)}, a média é ${media}.`)

if (media < 5) {
    console.log('O aluno está REPROVADO.')
} else if (media < 7) {
    console.log('O aluno está em RECUPERAÇÃO.')
} else {
    console.log('O aluno está APROVADO.')
}
