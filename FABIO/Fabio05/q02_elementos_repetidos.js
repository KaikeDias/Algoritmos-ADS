import {input} from './io_utils.js'
import {novo_vetor, contem_repetidos} from './vetor_utils.js'

function main(){
    const tamanho = Number(input('Quantidade de elementos: '))
    const vetor = novo_vetor(tamanho)

    for(let i = 0; i < tamanho; i++){
        vetor[i] = input(`Elemento ${i}: `)
    }

    if(contem_repetidos(vetor)){
        console.log('Há elementos repetidos no vetor')
    }else{
        console.log('Não há elementos repetidos no vetor')
    }

}

main()