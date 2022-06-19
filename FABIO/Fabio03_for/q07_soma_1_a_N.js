import {input} from './io_utils.js'

function main(){
    const N = Number(input('N: '))
    
    let soma = 0

    for(let num = 1; num <= N; num++){
        soma += num
    }

    console.log(soma)

}

main()