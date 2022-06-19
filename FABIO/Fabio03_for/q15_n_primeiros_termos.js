import {input} from './io_utils.js'

function main(){
    const N = Number(input('N: '))

    let razao = 2
    let sequencia = 1
    console.log(sequencia)
    for(let num = 1; num <= N - 1;num++){
        sequencia += razao
        console.log(sequencia)
        razao++
    }

}

main()