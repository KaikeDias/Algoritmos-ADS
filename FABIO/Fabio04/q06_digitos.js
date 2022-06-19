import {input} from './io_utils.js'

function main(){
    const num = input('Numero: ')

    const qtd = quantidade(num)

    console.log(qtd)
}

function quantidade(Numero){
    let cont = 0
    for(let digitos of Numero){
        cont++
    }
    return cont
}

main()