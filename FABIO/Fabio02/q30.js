import {input} from './io_utils.js'

function main(){
    //entrada
    const numero = Number(input('Número de 4 digitos: '))

    //saida
    if (quadrado_soma(numero)){
        console.log('O quadrado da soma das dezenas é igual ao numero')
    }else{
        console.log('O quadrado da soma das dezenas não é igual ao numero')
    }


}

function quadrado_soma(numero){
    const dezena1 = Math.trunc(numero/100)
    const dezena2 = numero % 100

    const soma_dezenas = dezena1 + dezena2

    if (soma_dezenas**2 === numero){
        return true
    }else{
        return false
    }
}

main()