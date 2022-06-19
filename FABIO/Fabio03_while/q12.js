import {input} from './io_utils.js'

function main(){
    const N = Number(input('N:'))
    let lista 
    let cont = 0
    let soma = 0

    while(cont < N){
        lista = Number(input('numero: '))
        soma += lista
        cont++
    }

    const media = soma / cont

    console.log(`Soma: ${soma}`)
    console.log(`Media: ${media}`)

}

main()