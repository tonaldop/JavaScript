// slace -> extrai parte de uma sring
let nome = 'Tonaldo Pereira'
console.log(nome.slice(5, 14))

// * se a posição for negativo, ela é contada apartir do fim

console.log(nome.slice(8))
console.log(nome.substr(8, 4))

// replace normal
console.log(nome.replace('Tonaldo', 'Ronaldo'))

// replace normal quando não encontra
console.log(nome.replace('tonaldo', 'Ronaldo'))

// replace sem diferença de maiúsculas e minúsculas
console.log(nome.replace(/TONALDO/i, 'Ronaldo')) // * expressão regular são escritas sem aspas

// replace substituindo
console.log(nome.replace(/Tonaldo/g, 'Ronaldo')) // * expressão regular são escritas sem aspas

// concat

let text = 'Hello'
console.log(text.concat(" ", "World!"))
