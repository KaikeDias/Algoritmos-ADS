import {input} from './io_utils.js'

function main(){
    const frase = input('Frase: ').split(' ')

    palavras(frase)
}

function palavras(frase){
    for(let palavra of frase){
        console.log(palavra)
    }
}

main()