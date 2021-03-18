// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let velocidade = Number(inputt('Qual velocidade do carro? '))

if (velocidade < 80) {
    console.log('Tenha um bom dia! Dirija com segurança.')
} else {
    let calculoMulta = (velocidade - 80) * 7
    console.log('MULTADO! Você exedeu a velocidade permitida que é de 80Km/h.')
    console.log(`Você deve pagar uma multa de R$:${parseFloat(calculoMulta).toFixed(2).replace('.', ',')}!`)
}
