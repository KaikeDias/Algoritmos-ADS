import {input} from './io_utils.js'

function main(){
    const frase = input('Frase: ').split(' ')
    
    const nova_frase = retirar_espaço(frase)

    console.log(nova_frase)
}

function retirar_espaço(frase){
    let nova_frase = ''

    for(let i = 0; i < frase.length; i++){
        nova_frase += frase[i]
    }

    return nova_frase
}

main()