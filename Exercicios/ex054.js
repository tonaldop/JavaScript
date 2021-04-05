// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let maior = 0
let menor = 0
let ano = new Date().getFullYear()

for (let i = 1; i <= 7; i++) {

    let ano_nacimento = parseInt(inputt(`Em que ano a ${i}º pessoa nasceu? `))
    let idade = ano - ano_nacimento
    
    if (idade >= 18) {
        maior ++        
    } else {
        menor ++
    }
}
console.log('')
console.log(`Ao todo tivemos ${maior} pessoas maiores de idade.`)
console.log(`E também tivemos ${menor} pessoas menos de idade`)
