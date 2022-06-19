import {input} from './io_utils.js'

function main(){
    const numero = Number(input('Numero: '))

    let fatorial = 1
    for(let num = numero; num >= 1; num--){
        fatorial *= num
    }

    console.log(fatorial)
}

main()