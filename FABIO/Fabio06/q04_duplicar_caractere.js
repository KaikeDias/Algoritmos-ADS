import {input} from './io_utils.js'
import {eh_letra} from './strings_utils.js'

function main(){
    const frase = input('Frase: ')

    const nova_frase = duplicar(frase)

    console.log(nova_frase)
}

function duplicar(frase){
    let nova_frase = ''

    for(let i = 0; i < frase.length; i++){
        if(eh_letra(frase[i])){
            nova_frase += frase[i] + frase[i]
        }else{
            nova_frase += frase[i]
        }
    }

    return nova_frase
}

main()