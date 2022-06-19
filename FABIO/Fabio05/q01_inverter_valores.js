import {input} from './io_utils.js'
import { novo_vetor, inverter } from './vetor_utils.js'

function main(){
    const tamanho = Number(input('Quantidade de elementos: '))

    const vetor_a = novo_vetor(4)

    for(let i = 0; i < tamanho; i++){
        vetor_a[i] = input(`Elemento ${i}: `)
    }    

    const vetor_b = inverter(vetor_a)

    console.log(vetor_a)
    console.log(vetor_b)
    
}


main()