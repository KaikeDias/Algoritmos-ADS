import {input} from './io_utils.js'
import {novo_vetor, juntar_vetores} from './vetor_utils.js'

function main(){
    const N = Number(input('Quantidade de elementos: '))
    const vetor_a = novo_vetor(N)
    const vetor_b = novo_vetor(N)

    for(let i = 0; i < N; i++){
        vetor_a[i] = input(`Elemento ${i} do vetor A: `)
    }

    for(let i = 0; i < N; i++){
        vetor_b[i] = input(`Elemento ${i} do vetor B: `)
    }

    const vetor_c = juntar_vetores(vetor_a,vetor_b)

    console.log(vetor_a)
    console.log(vetor_b)
    console.log(vetor_c)
}


main()