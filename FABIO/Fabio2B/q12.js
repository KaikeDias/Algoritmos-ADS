import {input} from './io_utils.js'

function main(){
    //entrada
    const numero = Number(input('Numero: '))

    //Saída
    if(int_dec(numero) === 0){
        console.log('Inteiro')
    }else{
        console.log('Decimal')
    }
}

//Processamento
function int_dec(numero){
    const multiplicacao = (numero * 10)
    const resto = (multiplicacao % 10)
    return resto
}

main()