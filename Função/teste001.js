// Função JS é First-Class Obkect (Citizens)
// Higher-order function

// criando de forma literal
function fun001() {

}

// Armazenar em uma variavel
const fun002 = function() {} // isso daqui é uma função anonima

// Armazenar dentro de um array
const array = [function(a, b) { return a + b }, fun001, fun002]
 console.log(array[0](2, 3))

 // Armazenar em um atributo de um objeto
 
 // Armazenar em uma função dentro de outra

 // Parametros e retorno são opcionais