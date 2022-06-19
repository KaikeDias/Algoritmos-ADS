import {input} from './io_utils.js'

function main(){
    let num = Number(input('Numero: '))

    while(num >= 1){
        num /= 2
    }
    
    console.log(`Resultado: ${num}`)
}

main()