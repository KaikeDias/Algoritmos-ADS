import {input} from './io_utils.js'

function main(){
    const N = Number(input('N:'))
    let lista 
    let cont = 0
    let maior = 0

    while(cont < N){
        lista = Number(input('numero: '))
        if(lista > maior){
            maior = lista
        }
        cont++
    }

    console.log(`Maior: ${maior}`)

}

main()