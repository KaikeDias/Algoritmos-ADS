import {input} from './io_utils.js'
import {novo_vetor} from './vetor_utils.js'

function main(){
    const vetor = novo_vetor(10)

    vetor[0] = Number(input('Numero: '))
    let elemento = vetor[0]
    for(let i = 1; i < vetor.length; i++){
        elemento *=2
        vetor[i] = elemento
    }

    console.log(vetor)

}

main()