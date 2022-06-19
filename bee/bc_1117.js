import {input} from './io_utils.js'

function main(){
    let index = 0
    let soma = 0
    let validas = 0
    while(validas < 2){
        const nota = Number(lines[index++])
        if(nota < 0 || nota > 10){
            console.log('Nota invalida')
        }else{
            soma += nota
            validas++
        }
    }

    const media = soma/2
    console.log(`media = ${media.toFixed(2)}`)
}

main()