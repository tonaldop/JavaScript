let i = 1
let soma = 0
let cont = 0

// Faz 250 interações
for (i; i <= 500; i+= 2) {
    // console.log(i)
    if (i % 3 === 0) {
        soma += i  // Somadores
        cont ++  // Acumuladores
    }
}
console.log(`A soma de todos os ${cont} valores solicitados é ${soma}`)
// Faça um programa que soma valores multiplos de 3 e que seja impares
