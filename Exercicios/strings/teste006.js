let cep = '4'

// coloca n elementros no início
cep = cep.padStart(4, 'z')
console.log(cep)

// coloca n elementos no fim
let nome = 'tonaldo'
cep = nome.padEnd(4, 'o')
console.log(nome)
