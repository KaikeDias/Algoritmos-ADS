import {input} from './io_utils.js'

function main(){
    const mensagem = input('Mensagem: ')

    const passada1 = primeira_passada(mensagem)
    const passada2 = segunda_passada(passada1)
    const passada3 = deslocar_na_segunda_metade(passada2)

    console.log(passada1)
    console.log(passada2)
    console.log(passada3)
}   

function primeira_passada(mensagem){
    let codigo = 0
    let mensagem_deslocada = ''

    for(let caractere of mensagem){
        codigo = caractere.charCodeAt()
        if(eh_letra(caractere)){
            mensagem_deslocada += String.fromCharCode(codigo + 3)
        }else{
            mensagem_deslocada += caractere
        }
    }
    return mensagem_deslocada
}

function segunda_passada(mensagem){
    let nova_mensagem = ''

    for(let i = mensagem.length - 1; i > 0; i--){
        nova_mensagem += mensagem[i]
    }

    return nova_mensagem
}

function deslocar_caractere_em_n_posicoes_ascii(caractere, n){
    let mensagem_deslocada = ""
    let codigo_ascii = caractere.charCodeAt()

    mensagem_deslocada += String.fromCharCode(codigo_ascii + n)
    
    return mensagem_deslocada
}


function deslocar_na_segunda_metade(mensagem){
    const tamanho_da_mensagem = mensagem.length
    const index_metade = Math.trunc(tamanho_da_mensagem/2)
    let mensagem_deslocada = ""
    let caractere

    for(let i = 0; i < tamanho_da_mensagem; i++){

        if(i < index_metade){
            mensagem_deslocada += mensagem[i]
        } else {
            caractere = mensagem[i]
            mensagem_deslocada += deslocar_caractere_em_n_posicoes_ascii(caractere, -1)
        }
    }

    return mensagem_deslocada
}
function eh_letra(caractere){
    const codigo = caractere.charCodeAt()

    if((codigo >= 65 && codigo <= 90) || (codigo >= 97 && codigo <= 122)){
        return true
    }else{
        return false
    }
}

main()