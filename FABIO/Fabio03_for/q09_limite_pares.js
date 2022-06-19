import {input} from './io_utils.js'

function main(){
    const lower_limit = Number(input('Limite inferior: '))
    const upper_limit = Number(input('Limite superior: '))

    for(let num = lower_limit; num <= upper_limit; num++){
        if(eh_par(num)){
            console.log(num)
        }
    }
}

function eh_par(num){
    return num % 2 === 0
}

main()