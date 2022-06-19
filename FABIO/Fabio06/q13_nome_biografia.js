import {input} from './io_utils.js'

function main(){
    const nome_completo = input('Nome completo: ').split(' ')
    
    const ultimo_nome = nome_completo[nome_completo.length-1]
    const iniciais = nome_biografico(nome_completo)

    console.log(`${ultimo_nome}, ${iniciais}`)
}

function nome_biografico(nome){
    let nomes = nome[0]
    let iniciais = `${nomes[0]}. `
    
    for(let i = 1; i < nome.length-1; i++){
        nomes = nome[i]
        iniciais += `${nomes[0]}. `
    }

    return iniciais
}

main()