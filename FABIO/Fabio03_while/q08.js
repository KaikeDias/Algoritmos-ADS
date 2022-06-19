import {input} from './io_utils.js'

function main(){
    const N = Number(input('N: '))
    const upper_limit = Number(input('Limite superior: '))
    const lowe_limit = Number(input('Limite inferior: '))

    let cont = lowe_limit
    while(cont <= upper_limit){
        if(eh_multiplo(cont,N)){
            console.log(cont)
        }
        cont++
    }
}

function eh_multiplo(cont,N){
    if(cont % N === 0){
        return true
    }
}


main()