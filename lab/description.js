function lin() {
    
  let tuc = ''
  for (let n = 0; n <= 100; n++) {
      tuc += '-'
  }

  console.log(tuc)
}

exports.description = function description(descInput, permiteVazio) {
  let n = 0
  let readlineSync = require('readline-sync');
  // var rls = require('readline-sync');
  // set encoding for rls:
  // readlineSync.setDefaultOptions({encoding: 'utf8'});
  
  while (n <= 10) {
    // n++
    // console.log(descInput)
    lin()
    // let teste = `Escolha uma opção ${readlineSync.prompt()}` 
    // console.log('Escola uma opçao' + readlineSync.prompt())
    let nome = readlineSync.question(`${descInput}: `)
    // let nome = `${descInput}: ${readlineSync.question(':')} ` 

    if (permiteVazio === true) {
      if (nome === '') {
          return -1
      
        } else {
        return String(nome)
      }

    } else {
      if (nome === '') {
        lin()
        console.log('Ops! Não pode deixar vazio')
      
      } else {
        return String(nome)
      }
    }
  } 
}
