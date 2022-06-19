import {input} from './io_utils.js'

function main(){
    //entrada
    const numero = Number(input('Numero de 4 digitos: '))
    
    //saida
    if (quadrado_perfeito(numero)){
        console.log('O numero é um quadrado perfeito')
    }else{
        console.log('O numero não é um quadrado perfeito')
    }
    
}

function quadrado_perfeito(numero){
    const raiz = Math.sqrt(numero)
    const dezena1 = Math.trunc(numero/100)
    const dezena2 = numero % 100

    if (raiz === dezena1 + dezena2){
        return true
    }else{
        return false
    }

}

main()