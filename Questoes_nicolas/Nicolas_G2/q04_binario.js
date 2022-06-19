import { input } from './io_utils.js'
import {caractere_valido} from './nicolas_utils.js'

function main(){
    const mensagem = input('Binário: ')

    if (mensagem_ok(mensagem)){
        console.log('sequência de Bits OK')
    }else{
        console.log('Mensagem corrompida: Sequência de bits inválida')
    }

}

function mensagem_ok(mensagem){
    const numeros = mensagem.split('-')
    let valor_caractere

    for (let octal of numeros){
        valor_caractere = conversor_binario(octal)
        if (!caractere_valido(valor_caractere)){
            return false
        }
    }

    return true
}

function conversor_binario(valor){
    let decimal = 0
    let digito

    for(let i = 0; i < valor.length; i++){
        digito =  Math.pow(2, 7-i) * Number(valor[i])

        decimal += digito
    }

    return decimal
}

main()