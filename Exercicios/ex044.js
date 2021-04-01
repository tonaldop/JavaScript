// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

console.log('================== LOJA TOM ==================')
let valorCompra = parseFloat(inputt('Preço da compra: R$ '))
console.log('FORMAS DE PAGAMENTOS:')
console.log('[ 1 ] à vista, dinheiro ou cheque')
console.log('[ 2 ] à vista cartão de crédito')
console.log('[ 3 ] 2x no cartão de créditos')
console.log('[ 4 ] 3x ou mais no cartão de crédito')
console.log('')

let opcao = parseInt(inputt('Escolha uma opção: '))
let calculo = 0
let calculoJuros = 0
switch (opcao) {
    case 1:
        calculo = valorCompra - (valorCompra * 0.1)
        break
        
    case 2:
        calculo = valorCompra - (valorCompra * 0.05)
        break
        
    case 3:
        calculoJuros = valorCompra
        console.log(`Sua compra será parcelada em 2x de R$${valorCompra / 2} com juros`)
        break
        
    case 4:
        let parcelas = parseInt(inputt('Quantas parcelas? '))
        calculoJuros = valorCompra + (valorCompra * 0.20)
        let valorParcelas = calculoJuros / parcelas
        console.log(`Sua compra será parcelada em ${parcelas}x de R$${valorParcelas} com juros`)
        break
        
    default:
        console.log('Ops! Opção inválida.')
}
console.log(`Sua compra de R$${valorCompra} vai custar R$${calculoJuros} no final.`)
