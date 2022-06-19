import {input} from './io_utils.js'

function main(){
    const nome_completo = input('Nome completo: ').split(' ')

    const login = nome_usuario(nome_completo)

    console.log(login)
}

function nome_usuario(nome_completo){
    let nome 
    let inicial = ''

    for(let i = 0; i < nome_completo.length; i++){
        nome = nome_completo[i]
        inicial += nome[0]
    }

    return inicial
}

main()