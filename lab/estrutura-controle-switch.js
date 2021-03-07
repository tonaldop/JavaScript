const dia = 22
// apenas p/ comparações
// não pode número float
// não pode intervalo
// uma condição por case

switch(dia) {
    case 7:
        console.log('Hoje é sábado!')
        break
    case 6:
        console.log('Hoje é sexa-feira!')
        break
    case 5:
        console.log('Hoje é quinta-feira!')
        break
    case 4:
        console.log('Hoje é quarta-feira!')
        break
    case 3:
        console.log('Hoje é terça-feira!')
        break
    case 2:
        console.log('Hoje é Segunda-feira!')
        break
    case 1:
        console.log('Hoje é domingo!')
        break
    default:
        console.log('Dia inválido!')
}