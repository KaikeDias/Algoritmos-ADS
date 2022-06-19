import {input} from './io_utils.js'
import {eh_algarismo} from './strings_utils.js'

function main(){
    const frase = input('Frase: ')

    const nova_frase = substituir_algarismo(frase)

    console.log(nova_frase)

}

function substituir_algarismo(frase){
    let nova_frase = ''
    const algarismo = nome_algarismo(frase)
    for(let i = 0; i < frase.length; i++){
        if(eh_algarismo(frase[i])){
            nova_frase += algarismo
        }else{
            nova_frase += frase[i]
        }
    }

    return nova_frase
}

function nome_algarismo(frase){
    for(let i = 0; i < frase.length; i++){
        if(eh_algarismo(frase[i])){
            if(frase[i] === '0'){
                return 'zero'
            }else if(frase[i] === '1'){
                return 'um'
            }else if(frase[i] === '2'){
                return 'dois'
            }else if(frase[i] === '3'){
                return 'tres'
            }else if(frase[i] === '4'){
                return 'quatro'
            }else if(frase[i] === '5'){
                return 'cinco'
            }else if(frase[i] === '6'){
                return 'seis'
            }else if(frase[i] === '7'){
                return 'sete'
            }else if(frase[i] === '8'){
                return 'oito'
            }else if(frase[i] === '9'){
                return 'nove'
            }
        }
    }

}

main()