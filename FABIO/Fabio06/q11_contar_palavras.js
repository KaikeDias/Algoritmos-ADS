import {input} from './io_utils.js'

function main(){
    const frase = input('Frase: ').split(' ')

    const contador = contar_palavras(frase)

    console.log(`Tem ${contador} palavras na frase`)

}

function contar_palavras(frase){
    let cont = 0

    while(cont < frase.length){
        cont++
    }

    return cont
}

main()