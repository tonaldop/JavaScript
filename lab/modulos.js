var desc = require('./description.js')
var menu = require('./tipoMeus.js')

function Colors() {

    this.Preto = "\033[30m"
    this.Vermelho = "\033[31m"
    this.Verde = "\033[32m verde"
    this.Amerelo = "\033[33m"
    this.Azul = "\033[34m"
    this.Roxo = "\033[35m"
    this.AzulClaro = "\033[36m"
    /*console.log('')
    console.log("\033[40m fundo preto. \u001b[0m")
    console.log("\033[41m fundo vermelho. \u001b[0m")
    console.log("\033[42m fundo verde. \u001b[0m")
    console.log("\033[43m fundo amarelo. \u001b[0m")
    console.log("\033[44m fundo azul. \u001b[0m")
    console.log("\033[45m fundo roxo. \u001b[0m")
    console.log("\033[46m fundo azul-claro. \u001b[0m")
    console.log('')*/
    this.CinzaEscuro = "\033[90m"
    this.VermelhoClaro = "\033[91m"
    this.VerdeCalro = "\033[92m"
    this.AmereloClaro = "\033[93m"
    this.AzulMedio = "\033[94m"
    this.MagnetaClaro = "\033[95m"
    this.CyanClaro = "\033[96m"
    this.Branco = "\033[97m"
    /*console.log('')
    console.log("\033[100m fundo cinza-escuro. \u001b[0m")
    console.log("\033[101m fundo vermelho-claro. \u001b[0m")
    console.log("\033[102m fundo verde-claro. \u001b[0m")
    console.log("\033[103m fundo amarelo-claro. \u001b[0m")
    console.log("\033[104m fundo azul-médio. \u001b[0m")
    console.log("\033[105m fundo magneta-claro. \u001b[0m")
    console.log("\033[106m fundo cyan-claro. \u001b[0m")
    console.log("\033[107m fundo branco. \u001b[0m")
    console.log('')*/
    this.Reset = "\033[0m"
    this.Negrito = "\033[1m"
    this.Inverte = "\033[7m"
}

// instanciei o objeto
const cor = new Colors()

// set as cores
// const bra = cor.Branco
// const gre = cor.CinzaEscuro
const ora =  cor.Amerelo
const cza = cor.CinzaEscuro
const rzt = cor.Reset

function lin() {
    
    let tuc = ''
    for (let n = 0; n <= 100; n++) {
        tuc += '-'
    }
  
    console.log(tuc)
}

function validation(lista, descInput, permiteVazio) {

    // let controll = 0
    do {
        
        let description = desc.description(descInput, permiteVazio)
        
        // Esse bloco serve se primeiro item da lista for um numeral (o tamanho maximo da lisata)
        if (Number(lista[0]) > 0) { 

            if (Number(description) > 0 && Number(description) <= Number(lista[0])) {
                return Number(description)        
            
            } else {
                lin()
                console.log('Ops! Escolha dentro das classificações válidas.')
                continue
            }
        }
        // }
        if (permiteVazio === true && description == -1) {
            return description
        }

        let n = 0
        for (n; n < lista.length; n++) {
            // console.log(lista[n])
            if (String(description).toLocaleUpperCase() == lista[n]) {
                return String(description)
            }
        }

        lin()
        console.log('Ops! Escolha dentro das classificações válidas.')
        // continue
    
    } while (true) // (controll < 10)
}

// var list = ['S', 'N']
// var nnn = 'Deseja cadastrar mais (S/N)?'
// var vazio = false
// var xx = validation(list, nnn, vazio)
// console.log(xx)
let ltMenuPrincipal = ['Lançamentos', 'Consultas', 'Cadastros', 'Relatórios', 'Configurações', 'Sair']
function opnLista(lista, tipoMenu, permiteVazio) {
    // console.log('Olá, mundo!')
    let c = 0
    lin()
    for (c; c < lista.length; c++) {
        // console.log(c)
        console.log(`${ora} ${c + 1} ${cza}- ${lista[c]} ${rzt}`)
    }
    // lin()
    // console.log(lista)
    let tuc = menu.menus(lista, tipoMenu=7)
    // console.log(tuc)
    let xxxx = validation(tuc, 'Escolha uma alternativa', permiteVazio)
    return xxxx
    // console.log(`O retorno ${xxxx}`)
    // console.log(tuc)

}
let xx = opnLista(ltMenuPrincipal, tipoMenu=7, permiteVazio=false)
console.log(xx)
