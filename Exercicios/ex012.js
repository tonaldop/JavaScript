// importando o mód. que permite entrada de dados pelo teclado
const inputt = require('prompt-sync')({'sigint': true})

let valorProduto = parseFloat(inputt('Qual valor do produto? R$: '))
let desconto = valorProduto * 0.05
let calculoDesconto = valorProduto-desconto
console.log(`O produto que cusata R$${valorProduto}, na promoção com desconto de 5% custará R$${calculoDesconto.toFixed(2)}`)
