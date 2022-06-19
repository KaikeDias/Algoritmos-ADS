import {input} from './io_utils.js'

function main(){
    const N = Number(input('N: '))
    const lower_limit = Number(input('Limite inferior: '))
    const upper_limit = Number(input('Limite superior: '))

    for(let num = lower_limit; num <= upper_limit; num++){
        if(eh_multiplo(N,num)){
            console.log(num)
        }
    }

}

function eh_multiplo(N,num){
    return num % N === 0

}

main()