function comprarNumeros (a ,b) {
    if (a === b) {
        return 0
    }

    if (a < b) {
        return -1
    }

    if (a > b) {
        return 1
    }
}
let lista = [5, 20, 3, 1, 14, 74, 101, 8]
// console.log(comprarNumeros(lista))
lista.sort(comprarNumeros)
console.log(lista)