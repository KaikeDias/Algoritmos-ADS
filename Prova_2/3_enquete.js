import { input, input_number } from './1_utils.js'

function main(){
    const num_candidatos = input_number('Numero de candidatos: ')
    let nome = []
    let votos = new Array(num_candidatos)
    votos = preencher_vetor(votos)
    let branco = 0
    let nulos = 0
    let nao_opinar = 0
    let participantes = 0
    let enter
    let voto

    for(let num = 0; num < num_candidatos; num++){
        nome[num] = input(`Nome do candidato ${num}: `)
    }

    while(voto !== -1){
        console.clear()
        menu(num_candidatos,nome)
        voto = input_number('Escolha um candidato: ')

        for(let i = 0; i < num_candidatos; i++){
            if(voto === i){
                votos[i]++

                participantes++
            }
        }

        if(voto === num_candidatos){
            branco++

            participantes++
        }else if(voto === num_candidatos+1){
            nulos++

            participantes++
        }else if(voto === num_candidatos+2){
            nao_opinar++

            participantes++
        }

        
        
        
        enter = input('Aperte <enter> para continuar')
    }
    
    let percentual = percentuais(votos,participantes,branco,nulos,nao_opinar)
    let lider = get_lider(votos,nome)

    console.log(`Quantidade de pessoas entrevistadas: ${participantes}`)
    for(let i = 0; i < num_candidatos; i++){
        console.log(`Percentual de votos do(a) ${nome[i]}: ${percentual[i].toFixed(2)}`)
    }
    console.log(`Percentual de votos branco: ${percentual[num_candidatos].toFixed(2)}`)
    console.log(`Percentual de votos nulos: ${percentual[num_candidatos+1].toFixed(2)}`)
    console.log(`Percentual de pessoas que nao opinaram: ${percentual[num_candidatos+2].toFixed(2)}`)
    console.log(`Lider: ${lider}`)

    if(segundo_turno(percentual)){
        console.log('Não haverá segundo turno')
    }else{
        console.log('Haverá segundo turno')
    }

}

function segundo_turno(percentual){
    for(let i = 0; i < percentual.length; i++){
        if(percentual[i] > 51){
            return true
        }
    }

    return false
}

function get_lider(votos,nome){
    let lider = nome[0]
    let maior = votos[0]

    for(let i = 0; i < votos.length; i++){
        if(votos[i] > maior){
            lider = nome[i]
            maior = votos[i]
        }
    }

    return lider
}

function percentuais(votos,participantes,branco,nulos,nao_opinar){
    let percentual = new Array(votos.length)

    for(let i = 0; i < percentual.length; i++){
        percentual[i] = (votos[i] / participantes) * 100
    }

    percentual[votos.length] = (branco / participantes) * 100
    percentual[votos.length+1] = (nulos / participantes) * 100
    percentual[votos.length+2] = (nao_opinar / participantes) * 100

    return percentual
}

function preencher_vetor(votos){
    for(let i = 0; i < votos.length; i++){
        votos[i] = 0
    }

    return votos
}

function menu(num_candidatos,nome){
    for(let i = 0; i < num_candidatos; i++){
        console.log(`${i} - ${nome[i]}`)
    }
    console.log(`${num_candidatos} - branco`)
    console.log(`${num_candidatos+1} - nulo`)
    console.log(`${num_candidatos+2} - nao opinar`)
}

main()