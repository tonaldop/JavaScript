
/*function validation(lsita, description, vazio=true) {
    
    let controll = false
    const lin = require('./linhas.js')
    
        opn = str(input(f' {n} ')).upper().strip()
        if opn.isnumeric() is True and str(ll[0]).isnumeric() is True:
            if 0 < int(opn) <= ll[0]:
                return int(opn)

            else:
                escolha()  # mensagem de erro
                continue

        elif opn in ll and len(opn) != 0 or vazio is True and opn == '':

            if str(opn) in ll and len(opn) > 0:
                return str(opn)

            return None

        else:
            escolha()  # mensagem de erro
            continue

    do {
        

    } while (controll == false)

}
def validacao(ll, n, vazio=False):
    """Essa função é responsavel pela validação das opções. Sendo necessário passar parâmetros, ll é uma lista dos
    caracteres que serão permitidos, n é a descrição do input e vazio permite se varzio ou não"""

    while True:

        lin()
        opn = str(input(f' {n} ')).upper().strip()
        if opn.isnumeric() is True and str(ll[0]).isnumeric() is True:
            if 0 < int(opn) <= ll[0]:
                return int(opn)

            else:
                escolha()  # mensagem de erro
                continue

        elif opn in ll and len(opn) != 0 or vazio is True and opn == '':

            if str(opn) in ll and len(opn) > 0:
                return str(opn)

            return None

        else:
            escolha()  # mensagem de erro
            continue
// const linhas = require('./linhas.js')
/*def opnLista(lista: list, menu: int, retorno: str = 'st', vazio=False):
    """FAZER COMENTÁRIOS"""

    cont = 0
    if len(lista) > 0:  # se a lista tiver dados // imprime

        lin()
        for k in lista:
            cont += 1
            print(f' {cont:<2} - {str(k).strip()}')

    restricao = tipoMenus(menu, len(lista))
    if restricao[1] is True:
        vazio = True

    opn = validacao(restricao[0], 'Escolha uma opção:', vazio)

    if retorno == 'st':
        if str(opn).isnumeric() is True:
            return lista[opn - 1]

        else:
            return opn

    elif retorno == 'nt':
        if str(opn).isnumeric() is True:
            return int(opn)

        else:
            if menu == 5 and opn is None:
                return 1
            return opn */


            