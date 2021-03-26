// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let ano_de_nascimento = parseInt(inputt('Ano de nascimento: '))
let ano = new Date().getFullYear()
let calculo_idade = ano - ano_de_nascimento

console.log(`Quem nasceu em ${ano_de_nascimento} tem ano(s) ${calculo_idade} em ${ano}.`)
if (calculo_idade > 18) {
    console.log(`Você já deveria ter se alistado há ${calculo_idade - 18}`)
    console.log(`Seu alstamento foi em ${ano - (calculo_idade - 18)}`)

} else if (calculo_idade === 18) {
    console.log('Você tem que se alistar IMEDIATAMENTE!')

} else {
    console.log(`Ainda faltam ${18 - calculo_idade} ano(s) para o alistamento.`)
    console.log(`Seu alistamento será ${ano + 18 - calculo_idade}.`)
}
