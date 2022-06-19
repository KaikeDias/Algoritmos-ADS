import {input} from './io_utils.js'

function main(){
    const N = Number(input('N: '))

    let razao = 2 
    let cont = 1
    let numeros = 1
    let sequencia = `${numeros}`
    while(cont < N){
        numeros += razao
        sequencia += `,${numeros}`
        razao++
        cont++

    }

    console.log(`(${sequencia})`)

    
}



main()