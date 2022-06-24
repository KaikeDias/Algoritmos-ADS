import {input} from './io_utils.js'
import {map_vetor, novo_vetor} from './vetor_utils.js'

function main(){
    const vetor = novo_vetor(5,2)
    
    const vetor_dobrado = map_vetor(vetor, dobrar)
    
    console.log(vetor)
    console.log(vetor_dobrado)
}

const dobrar = valor => valor * 2

main()