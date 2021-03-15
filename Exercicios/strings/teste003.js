// pesquisando a última ocorrência de dentro de uma string
let frase = "O rato roeu a roupa do rei de Roma e morreu depois"
console.log(frase.lastIndexOf('r'))

// com um segundo parametro para indicar a posição inicial
console.log(frase.lastIndexOf('r', 10))

let frutas = ['goiaba', 'uva', 'jaca', 'jabuticaba', 'abacaxi', 'morango']
console.log(frutas.lastIndexOf('jaca'))

// *se o retorno fo -1, o resultado não foi encontrado