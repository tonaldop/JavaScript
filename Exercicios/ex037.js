// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let numero = parseInt(inputt('Digite um número inteiro: '))

console.log('Escolha uma das bases para conversão: ')
console.log('[ 1 ] converter para BINÁRIO')
console.log('[ 2 ] converter para OCTAL')
console.log('[ 3 ] converter para HEXADECIMAL')

let opcao = parseInt(inputt('Escolha uma opção: '))
let conversao = 0
switch (opcao) {
    
    case 1:
        conversao = (numero >>> 0).toString(2) // >>> operação bit a bit
        console.log(`${numero} covnertido para BINÁRIO é igual a $ ${conversao}`)
        break
    
    case 2:
        conversao = (numero >>> 0).toString(8)
        console.log(`${numero} convertido para OCTAL é igual a ${conversao}`)
        break
    
    case 3:
        conversao = parseInt(numero, 16)
        console.log(`${numero} convertido para HEXADECIMAL é igual a ${conversao}`)
        break

    default:
        console.log('Ops! Opção inválida.')
}
