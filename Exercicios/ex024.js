// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let cidade = inputt('Em que cidade você nasceu? ').trim()

// Quebrei a string em uma array
cidade = cidade.split(" ")

// fazendo a verificação na primeira ocorrência
console.log(cidade[0].toLowerCase().search('santos'))

// por comparação
console.log(cidade[0].toLowerCase() === 'santos')
