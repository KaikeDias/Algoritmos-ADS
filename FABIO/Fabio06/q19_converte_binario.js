import {input} from './io_utils.js'

function main(){
    const binario = input('Numero binario: ')

    const decimal = conversor(binario)

    console.log(decimal)

}

function conversor(binario){
    let expoente = binario.length-1
    let num_decimal = 0
    
    for(let i in binario){
        num_decimal += Number(binario[i]) * 2**expoente
        expoente--
    }

    return num_decimal
}

main()