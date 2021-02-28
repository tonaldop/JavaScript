// Função sem retorno
function soma(a, b) {
    console.log(a + b)
}

// Função com retorno
function multiplicacao(a, b) {
    return a * b
}

// Atribuindo uma função a variavel
let fun = multiplicacao(7, 7)
console.log(fun)

// Função arrow -> atribuindo a constante soma uma função arros
const soma_ = (a, b) => {
    return a + b
}

let mult_ = (a, b) => { 
    return a * b
}

const nome = 'Tonaldo'
console.log(`Boa tarde ${nome}`)
console.log(`A soma entre 8 e 9 = ${soma_(8, 9)}`)
console.log(`A multiplicação entre 8 e 9 = ${mult_(8, 9)}`)