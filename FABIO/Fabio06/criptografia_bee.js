import {input} from './io_utils.js'
import { deslocar_ASCII, eh_letra, inverter } from './strings_utils.js'

function main(){
    const mensagem = input('Mensagem: ')

    const primeira_passada = deslocar_caractere(mensagem)
    const segunda_passada = inverter(primeira_passada)
    const terceira_passada = deslocar_apartir_metade(segunda_passada)
    
    console.log(terceira_passada)
}

function deslocar_caractere(mensagem){
    let nova_mensagem = ''

    for(let caractere of mensagem){
        if(eh_letra(caractere)){
            const deslocar = deslocar_ASCII(caractere, 3)
            nova_mensagem += deslocar
        }else{
            nova_mensagem += caractere
        }
    }

    return nova_mensagem
}

function deslocar_apartir_metade(mensagem){
    const metade = Math.trunc(mensagem.length/2)
    let nova_mensagem = ''

    for(let i = 0; i < mensagem.length; i++){
        if(i < metade){
            nova_mensagem += mensagem[i]
        }else{
            nova_mensagem += deslocar_ASCII(mensagem[i], -1)
        }
    }

    return nova_mensagem
}

main()