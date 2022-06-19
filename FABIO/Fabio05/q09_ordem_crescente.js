import {input} from './io_utils.js'
import { novo_vetor, ordenar_vetor } from './vetor_utils.js'

function main(){
    const N = Number(input('N: '))
    const vetor = novo_vetor(N)

    for(let i = 0; i < N; i++){
        vetor[i] = Number(input(`Elemento ${i}: `))
    }

    const vetor_crescente = ordenar_vetor(vetor,)

    console.log(vetor)
}

main()