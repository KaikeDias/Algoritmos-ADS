import {input} from './io_utils.js'
import {eh_consoante, eh_letra, inverter} from './strings_utils.js'

function main(){
    const mensagem = input('Mensagem: ')

    const mensagem_invertida = inverter(mensagem)
    const substituir = substituir_consoante(mensagem_invertida)
    
    console.log(substituir)

}

function substituir_consoante(mensagem){
    let nova_mensagem = ''

    for(let i = 0; i < mensagem.length; i++){
        if(eh_letra(mensagem[i])){
            if(eh_consoante(mensagem[i])){
                nova_mensagem += '#'
            }else{
                nova_mensagem += mensagem[i]
            }
        }else{
            nova_mensagem += mensagem[i]
        }
    }

    return nova_mensagem
}

main()