import {input} from './io_utils.js'

function main(){
    //Entrada
    const numero = Number(input('Digite um numero: '))

    //saída
    if(eh_positivo(numero)){
        console.log(`${numero} é um número positivo`)
    }else{
        console.log(`${numero} é um número negativo`)
    }

}

//Processamento
function eh_positivo(numero){
    if(numero >= 0){
        return true
    }else{
        return false
    }
}

main()