import {input,eh_par} from './io_utils.js'
import {novo_vetor} from './vetor_utils.js'

function main(){
    const N = Number(input('Tamanho do vetor: '))
    const vetor_a = novo_vetor(N)

    for(let i = 0; i < N; i++){
        vetor_a[i] = input(`Elemento ${i}: `)
    }

    const vetor_b = par_impar(N, vetor_a)

    console.log(vetor_a)
    console.log(vetor_b)
}

function par_impar(N, vetor){
    const vetor_b = novo_vetor(N)

    for(let i = 0; i < N; i++){
        if(eh_par(vetor[i])){
            vetor_b[i] = 0
        }else{
            vetor_b[i] = 1
        }
    }

    return vetor_b
}


main()