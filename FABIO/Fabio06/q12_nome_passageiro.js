import {input} from './io_utils.js'

function main(){
    const nome = input('Nome completo: ').split(' ')

    const passageiro = nome_passageiro(nome)

    console.log(passageiro)
}

function nome_passageiro(nome){
    const primeiro_nome = nome[0]
    const ultimo_nome = nome[nome.length-1]
    
    const juncao = ultimo_nome + '/' + primeiro_nome

    return juncao
}

main()