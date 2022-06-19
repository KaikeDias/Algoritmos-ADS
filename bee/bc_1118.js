import {input} from './io_utils.js'

function main(){
    let index = 0
    let continuar = 0

    while(continuar !== 2){
        let soma = 0
        let validas = 0
        while(validas < 2){
            const nota = Number(lines[index++])
            if(nota < 0 || nota > 10){
                console.log('nota invalida')
            }else{
                soma += nota
                validas++
            }
        }
        const media = soma/2
        console.log(`media = ${media.toFixed(2)}`)

        console.log('novo calculo (1-sim 2-nao)')
        continuar = Number(lines[index++])
        while(continuar < 1 || continuar > 2){
            console.log('novo calculo (1-sim 2-nao)')
            continuar = Number(lines[index++])
        }
    }

}

main()