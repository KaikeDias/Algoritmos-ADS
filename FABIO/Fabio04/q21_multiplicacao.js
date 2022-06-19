import {input} from './io_utils.js'

function main(){
    const n1 = Number(input('Numero 1: '))
    const n2 = Number(input('Numero 2: '))

    let cont = 0
    let multiplicacao = 0
    
    while(cont < n2){
        multiplicacao += n1
        cont++
    }

    console.log(multiplicacao)

}

main()