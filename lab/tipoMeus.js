function lin() {
    
    let tuc = ''
    for (let n = 0; n <= 100; n++) {
        tuc += '-'
    }
  
    console.log(tuc)
}

exports.menus = function menus(lista, tipo) {

    const quantidade = lista.length
    
    if (quantidade === 0 && tipo != 4) {
        lin()
        console.log('Ops! Não tem nenhum item')
        return -1
    }
    
    lin()
    switch (tipo) {
        
        case 1:

            console.log(' [P] Pesquisa [N] Cadastrar [V] Voltar')
                return ['P', 'N', 'V', false]
        
        case 2:

            console.log(' [E] Editar [A] Ativar [V] Voltar')
            return ['E', 'A', 'V', false]

        case 3:
            
            console.log(' [E] Editar [I] Inativar [V] Voltar')
            return ['E', 'I', 'V', false]
        
        case 4:
                            
            if (quantidade > 0) {
                    console.log(' [P] Pesquisar [N] Cadastrar [D] Detalhes [V] Voltar')
                    return ['P', 'N', 'D', 'V', false]    

                } else {
                    console.log(' [P] Pesquisar [N] Cadastrar')
                    return ['P', 'N', false]
                }

        case 5:

            if (quantidade > 1) {
                console.log(` [1 a ${quantidade}] Selecinar [P] Pesquisar [N] Cadastrar [D] Detalhes [V] Voltar`)
                return  [quantidade, 'P', 'N', 'D', 'V', false]
                
            } else {
                console.log(' [ENTER] Selecinar [P] Pesquisar [N] Cadastrar [D] Detalhes [V] Voltar')
                return ['P', 'N', 'D', 'V', true]
            }  

        case 6:

            if (quantidade > 1) {
                console.log(` [1 a ${quantidade}] Selecinar [V] Voltar`)
                return [quantidade, 'V', false]

            } else {
                console.log(' [ENTER] Selecinar [V] Voltar')
                return ['', 'V', true]
            }
            
        case 7:

        if (quantidade > 1) {
                console.log(` [1 a ${quantidade}] Selecinar`)
                return [quantidade, false]

            } else {
                console.log(' [1] Selecinar')
                return [1, false]            
            }

        case 8:

            if (quantidade > 1) {
                console.log(` [1 a ${quantidade}] Selecinar [P] Pesquisar [N] Cadastrar [D] Detalhes`)
                return [quantidade, 'P', 'N', 'D', false]

            } else {
                console.log(' [ENTER] Selecinar [P] Pesquisar [N] Cadastrar [D] Detalhes')
                return ['P', 'N', 'D', true]
            }

        case 9:

            if (quantidade == 1) {
                console.log(' [ENTER] Selecinar [P] Pesquisar [N] Cadastrar [V] Voltar')
                return ['P', 'N', 'V', true]

            } else if (quantidade > 1) {
                console.log(` [1 a ${quantidade}] Selecinar [P] Pesquisar [N] Cadastrar [V] Voltar`)
                return [quantidade, 'P', 'N', 'V', false]

            } else {
                console.log(' [P] Pesquisa [N] Cadastrar [V] Voltar')
                return ['P', 'N', 'V', false]
            }

        case 10:

            if (quantidade == 1) {
                console.log(' [ENTER] Selecinar [N] Cadastrar [V] Voltar')
                return ['N', 'V', true]

            } else if(quantidade > 1) {
                console.log(` [1 a ${quantidade}] Selecinar [N] Cadastrar [V] Voltar`)
                return [quantidade, 'N', 'V', false]

            } else {
                console.log(' [N] Cadastrar [V] Voltar')
                return ['N', 'V', false]
            }          
    }
}
// const lista = ['Tonaldo', 'Eva', 'Patrick']
// xane = menus(lista, 9)
// console.log(xane)





/*console.log('Press any key to continue.');
process.stdin.once('data', function () {
    continueDoingStuff();
});*/