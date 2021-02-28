const nome = 'Tonaldo'

// pera o caractere pelo indice
console.log(nome.charAt(0))

// pega o caractere pelo número da tablea acsi
console.log(nome.charCodeAt(0))

// mostra o indice corespondente a letra
console.log(nome.indexOf('d'))

// fatia do inde 0 ao escolhido
console.log(nome.substring(1))

// fatia do indice inicio e fim
console.log(nome.substring(0, 3))


const frase = 'O rato, roeu a, roupa do, rei de, Roma'
console.log(frase.split(','))

// templete string
const templete = `Olá ${nome}`
console.log(templete)