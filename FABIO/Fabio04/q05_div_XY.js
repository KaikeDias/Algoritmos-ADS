import {input} from './io_utils.js'

function main(){
    let X = Number(input('X: '))
    let N = Number(input('N: ')) 

    while(N !== 2){
        X = X/N
        console.log(`Resultado: ${X}`)
        N--
    }

}

main()