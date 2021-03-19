// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let ano = parseInt(inputt('Que ano quer analisar? Coloque 0 para ano atual: '))

if (ano === 0) {
    const data = new Date()
    ano = data.getFullYear()
}

if (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) {
    console.log(`O ano ${ano} é bissexto!`)
} else {
    console.log(`O ano ${ano} não é bissexto!`)
}

/**
 * formula para o ano bissexto
 * 
 * ser divisivel por 4
 * não ser divisivel por 100
 * ou divisivel por 400
 */
