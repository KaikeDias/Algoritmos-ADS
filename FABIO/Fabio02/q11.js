import {input} from './io_utils.js'

function main(){
    //entrada
    const n1 = Number(input('Numero 1: '))
    const n2 = Number(input('Numero 2: '))
    const n3 = Number(input('Numero 3: '))
    const opcao = Number(input('Qual numero deseja ver? '))

    //saida
    console.log(option(opcao,n1,n2,n3))

}

function option(opcao,n1,n2,n3){
    if (opcao === 1){
        return n1
    }else if(opcao === 2){
        return n2
    }else if(opcao === 3){
        return n3
    }

}

main()