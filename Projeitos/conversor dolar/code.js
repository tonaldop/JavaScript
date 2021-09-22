function Converter() {
    var valorElemento = document.getElementById("valor")
    var valor = valorElemento.value
    var valorEmDolar = parseFloat(valor)
    var valorEmReal =  valorEmDolar * 5
    // console.log(valorEmReal)
    
    var elementoValorConvertido = document.getElementById("valorConvertido")
    // console.log(valorEmDolar)
    if (isNaN(valorEmDolar)) {
        var valorConvertido = "Favor preencher um valor."
    } else {
        var valorConvertido = "O valor em real é R$ " + valorEmReal.toFixed(2).replace('.', ',')
    }
    
    elementoValorConvertido.innerHTML = valorConvertido
}