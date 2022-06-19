import {input} from './io_utils.js'
import {novo_vetor} from './vetor_utils.js'

function main(){
    const vetor = novo_vetor(8)

    for(let i = 0; i < vetor.length; i++){
        vetor[i] = input(`Elemento ${i}: `)
    }

    const decimal = converter_decimal(vetor)
    const hexadecimal = converter_hexadecimal(decimal)

    console.log(vetor)
    console.log(decimal)
    console.log(hexadecimal)

}

function converter_decimal(vetor){
    let decimal = 0
    let expoente = 7
    
    for(let i = 0; i < 8; i++){
        decimal += vetor[i] * 2**expoente
        expoente--
    }

    return decimal
}

function converter_hexadecimal(decimal){
    let hexadecimal_desordenado = ``
    let hexadecimal = ``
    let algarismo_hexadecimal 
    
    while(decimal !== 0){
        algarismo_hexadecimal = caractere_hexadecimal(decimal % 16)
        hexadecimal_desordenado += `${algarismo_hexadecimal}`
        decimal = Math.trunc(decimal / 16)
    }

    for(let i = hexadecimal_desordenado.length-1; i >= 0; i--){
        hexadecimal += hexadecimal_desordenado[i]
    }

    return hexadecimal
}

function caractere_hexadecimal(numero) {
    let letras = ['A','B','C','D','E','F']
    let caractere

    if(numero>=10){
        caractere = letras[numero-10]
    } else {
        caractere = numero
    }

    return caractere
}

main()

main()