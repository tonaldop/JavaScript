// Callback -> chamar de volta
const fabricantes = [ 'Mercedes', 'Audi', 'BMW' ]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}
fabricantes.forEach(imprimir)
fabricantes.forEach( fabricante => console.log(fabricante) )

let notas = [7.0, 6, 5, 8.5, 7.1, 9, 4, 3, 7.9, 9]
let notasBaixas = []
for (let k in notas) {
    console.log(k)
    if (notas[k] < 7) {
        notasBaixas.push(notas[k])
    }
}

// com filter
console.log(notasBaixas)
notasBaixa = notas.filter(function(nota) {
    return nota < 7
})

console.log(notasBaixa)

// com arrow
const notasBaixaB = notas.filter(nota => nota < 7)
console.log(notasBaixaB)