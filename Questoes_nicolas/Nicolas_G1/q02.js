import {input,print} from './io_utils.js'

function main(){
    //Entrada
    let atual = Number(input('Numero: '))
    let anterior = Number(input('Numero: '))
    let pares = 0
    let impares = 0
    let positivos = 0
    let negativos = 0

    //processamento
    if(eh_par(anterior)){
        pares++
    }else{
        impares++
    }
    
    if(eh_positivo(anterior)){
        positivos++
    }else{
        negativos++
    }
    if(eh_par(atual)){
        pares++
    }else{
        impares++
    }
    
    if(eh_positivo(atual)){
        positivos++
    }else{
        negativos++
    }

    while(!eh_multiplo(atual,anterior)){
        anterior = atual
        atual = Number(input('Numero: '))
        if(eh_par(atual)){
            pares++
        }else{
            impares++
        }
        
        if(eh_positivo(atual)){
            positivos++
        }else{
            negativos++
        }
    }

    print(`Quantidade de numeros pares: ${pares}`)
    print(`Quantidade de numeros impares: ${impares}`)
    print(`Quantidade de numeros positivos: ${positivos}`)
    print(`Quantidade de numeros negativos: ${negativos}`)

}

function eh_par(atual){
    return atual % 2 === 0
}

function eh_positivo(atual){
    return atual > 0 
}

function eh_multiplo(atual,anterior){
    if(atual === 0 && anterior === 0){
        return true
    }
    
    if(atual % anterior === 0 || anterior % atual === 0){
        return true
    }else{
        return false
    }
}

main()