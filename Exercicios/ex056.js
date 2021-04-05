// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let maior = 0
let homem_velho = ''
let cont = 0
let soma_idade = 0
for (let i = 1; i <= 4; i++) {
    console.log(`---------- ${i}º PESSOA ----------`)
    
    let nome = inputt('Nome: ')
    let idade = parseInt(inputt('Idade: '))
    let sexo = inputt('Sexo [M/F]: ').toLocaleUpperCase()
    soma_idade += idade
    
    if (idade > maior && sexo === 'M') {
        maior = idade
        homem_velho = nome
    }
    if (sexo === 'F' && idade < 20) {
        cont += 1
    }
}

console.log('')
console.log(`A média de idade do grupo é de ${soma_idade / 4} anos.`)
console.log(`O homem mais velho tem ${maior} e se chama ${homem_velho}.`)
console.log(`Ao todo são ${cont} mulhere(s) menores de 20 anos.`)
