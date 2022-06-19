import {input} from './io_utils.js'

function main(){
    const N = Number(input('N: '))
    let numero
    let maior = 0

    for(let num = 1; num <= N; num++){
        numero = Number(input('Numero: '))
        if(numero > maior){
            maior = numero
        }
    }  

    console.log(`Maior: ${maior}`)
}

main()