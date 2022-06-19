import {input} from './io_utils.js'

function main(){
    const X = Number(input('X: '))
    let anterior = Number(input('Numero: '))
    let atual = Number(input('Numero: '))
    let soma = anterior + atual

    while(soma !== X){
        anterior = atual
        atual = Number(input('Numero: '))
        soma = anterior + atual
    }


}

main()