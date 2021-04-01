// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})
console.log('Suas opções: ')
console.log('[ 0 ] PEDRA')
console.log('[ 1 ] PAPEL')
console.log('[ 2 ] TESSOURA')

let jogador = parseInt(inputt('Qual sua jogada? '))
let intens = ['PEDRA', 'PAPEL', 'TESSOURA']
let escore = ''
let linha = ''
let jogadaComputador = ''
let jogadaUsuario = ''

function getRandomInt(min = 0, max) {
    let numero = Math.random() * ((max + 1) - min) + min
    return parseInt(numero)
}

let computador = getRandomInt(0, 2)
// - Pedra ganha da Tesoura (a amassa e quebra)
// - Tesoura ganha do Papel (o corta)
// - Papel ganha da Pedra (a embrulha)
switch (jogador) {
    case 0:
        jogadaUsuario = 'PEDRA'
        if (computador === 0) {
            escore = 'Empate!'
        } else if (computador === 1) {
            escore = 'Computador venceu!'
        } else {
            escore = 'Jogador venceu!'
        }
        break

    case 1:
        jogadaUsuario = 'PAPEL'
        if (computador === 0) {
            escore = 'Jogador venceu!'
        } else if (computador === 1) {
            escore = 'Empate!'
        } else {
            escore = 'Computador venceu!'
        }
        break

    case 2:
        jogadaUsuario = 'TESSOURA'
        if (computador === 0) {
            escore = 'Computador Venceu!'
        } else if (computador === 1) {
            escore = 'Jogador venceu!'
        } else {
            escore = 'Empate!'
        }
        break
}

jogadaComputador = intens[computador]
console.log('JO')
console.log('KEN')
console.log('PO!!!')
console.log(linha.padStart(50, '=-'))
console.log(`Computador jogou ${jogadaComputador}`)
console.log(`Jogador jogou ${jogadaUsuario} `)
console.log(linha.padStart(50, '=-'))
console.log(`${escore}`)
