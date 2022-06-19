import {input} from './io_utils.js'

function main(){
    const A0 = Number(input('A0: '))
    const limite = Number(input('Limite: '))
    const razao = Number(input('Razão: '))

    PG(A0,limite,razao)

}

function PG(a0,limite,razao){
    let cont = a0

    while (cont < limite){
        console.log(cont)
        cont = cont * razao
    }

}

main()