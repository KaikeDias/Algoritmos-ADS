import {input} from './io_utils.js'

function main(){
    const upper_limit = Number(input('Limite superior: '))
    const lower_limit = Number(input('Limite inferior: '))

    let cont = lower_limit
    while(cont <= upper_limit){
        if(eh_primo(cont)){
            console.log(cont)
        }
        cont++
    }
}

function eh_primo(n1){
    if(n1 === 1) {
        return false

    } else if (n1 === 2 || n1 === 3 || n1 === 5 || n1 === 7) {
        return true

    } else if ( ((n1 % 2) !== 0) && ((n1 % 3) !== 0) && ((n1 % 5) !== 0) && (((n1 % 7) !== 0)) ){
        return true

    } else {
        return false
    }

}


main()