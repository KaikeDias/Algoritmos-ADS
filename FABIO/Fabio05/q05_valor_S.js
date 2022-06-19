import {input} from './io_utils.js'
import {novo_vetor} from './vetor_utils.js'

function main(){
    const vetor = novo_vetor(20)

    for(let i = 0; i < vetor.length; i++){
        vetor[i] = Number(input(`Elemento ${i}: `))
    }

    const S = calculo(vetor)

    console.log(S)
}

function calculo(vetor){
    let j = vetor.length-1
    let S = 0
    
    for(let i = 0; i < 10; i++){
        S += (vetor[i] - vetor[j])**2
        j--
    }

    return S
}

main()