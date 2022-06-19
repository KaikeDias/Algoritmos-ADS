import {input} from './io_utils.js'

function main(){
    //entrada
    const numero = Number(input('Digite um numero: '))

    //saida
    if (eh_par(numero)){
        console.log(`${numero} é par`)
    }else{
        console.log(`${numero} é ímpar`)
    }

}

function eh_par(valor){
    if (valor % 2 === 0){
        return true
    }else{
        return false
    }

}

main()