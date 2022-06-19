import {input} from './io_utils.js'

function main(){
    const tamanho = input('Numero de casos: ')
    let numero
    
    const vetor_fibonacci = fibonacci()

    let cont = 0
    while(cont < tamanho){
        numero = Number(input('Numero: '))
        console.log(`Fib(${numero}) = ${vetor_fibonacci[numero]}`)
        cont++
    }
}

function novo_vetor(tamanho, valor_padrao){
    const vetor = new Array(tamanho).fill(valor_padrao)

    return vetor
}

function fibonacci(){
    const vetor_fibonacci = novo_vetor(8)

    for(let a = 0, b = 1, i = 0; i < 8; b += a, a = b-a, i++){
        vetor_fibonacci[i] = a
    }

    return(vetor_fibonacci)
}

main()