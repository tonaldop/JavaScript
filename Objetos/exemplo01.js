const pessoa = {
    nome: 'Rebeca',
    peso: 14,
    idade: 7
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(chave, valor)
    
});