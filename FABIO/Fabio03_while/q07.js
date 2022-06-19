import {input} from './io_utils.js'

function main(){
    const N = Number(input('N: '))
    
    const resultado = soma_total(N)

    console.log(resultado)
}

function soma_total(N){
    let cont = 1
    let soma = 0

    while (cont <= N){
        soma += cont
        cont++
    }
    return soma
    
}

main()