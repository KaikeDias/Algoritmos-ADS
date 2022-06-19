import {input} from './io_utils.js'
import { novo_vetor, fibonacci } from './vetor_utils.js'

function main(){
    const N = Number(input('N: '))
    const vetor = novo_vetor(N)

    const vetor_fibonacci = fibonacci(vetor)

    console.log(vetor_fibonacci)
}

main()