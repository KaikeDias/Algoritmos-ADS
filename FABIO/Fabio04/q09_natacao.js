import {input} from './io_utils.js'

function main(){
    let num_prova = Number(input('Numero da prova: '))
    let num_nadadores = Number(input('Numero de nadadores: '))

    let nome 
    let classificacao
    let tempo
    let clube
    let clubeA = 0
    let clubeB = 0
    let cont = 0

    while(num_prova !== 0 && num_nadadores !== 0){
        while(cont < num_nadadores){
            nome = input('Nome: ')
            classificacao = Number(input('Classificação: '))
            tempo = Number(input('Tempo: '))
            clube = input('Clube (A/B): ')

            if(clube === 'A'){
                clubeA += pontos(classificacao) 
            }else if(clube === 'B'){
                clubeB += pontos(classificacao)
            }
            cont++
        }
        console.log('--------------Nova prova--------------')
        num_prova = Number(input('Numero da prova: '))
        num_nadadores = Number(input('Numero de nadadores: '))
    }

    let vencedor
    if(clubeA > clubeB){
        vencedor = 'Clube A'
    }else if(clubeB > clubeA){
        vencedor = 'Clube B'
    }else{
        vencedor = 'Empate'
    }

    console.log('--------------Resultado--------------')
    console.log(`Total de pontos clube A: ${clubeA}`)
    console.log(`Total de pontos clube B: ${clubeB}`)
    console.log(`Clube vencedor: ${vencedor}`)

}

function pontos(classificacao){
    if(classificacao === 1){
        return 9
    }else if(classificacao === 2){
        return 6 
    }else if(classificacao === 3){
        return 4
    }else if(classificacao === 4){
        return 3
    }

}

main()