import {input} from './io_utils.js'

function main(){
    const lower_limit = Number(input('Limite inferior: '))
    const upper_limit = Number(input('Limite superior: '))

    for(let num = lower_limit; num <= upper_limit; num++){
        if(eh_primo(num)){
            console.log(num)
        }
    }
}

function eh_primo(num){
    if(num === 1) {
        return false

    } else if (num === 2 || num === 3 || num === 5 || num === 7) {
        return true

    } else if ( ((num % 2) !== 0) && ((num % 3) !== 0) && ((num % 5) !== 0) && (((num % 7) !== 0)) ){
        return true

    } else {
        return false
    }
}

main()