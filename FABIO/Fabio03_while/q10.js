import {input} from './io_utils.js'

function main(){
    const upper_limit = Number(input('Limite superior: '))
    const lowe_limit = Number(input('Limite inferior: '))

    let cont = lowe_limit
    while(cont <= upper_limit){
        if(eh_impar(cont)){
            console.log(cont)
        }
        cont++
    }
}

function eh_impar(cont){
    if(cont % 2 !== 0){
        return true
    }
}


main()