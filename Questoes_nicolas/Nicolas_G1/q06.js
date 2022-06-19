import {input} from './io_utils.js'

function main(){
    const frase = input('Digite a frase: ')
    const palavra = frase.split(' ')

    if(valida(frase)){
        console.log(`A frase tem ${palavra.length} palavras`)
    }else{
        console.log(`Frase invalida`)
    }

}

function valida(frase){
    const caractere = frase.length
    if(caractere < 80 || caractere > 180){
        return false
    }
    return true
}

main()