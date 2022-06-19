import {media_elementos, ordenar_vetor, mediana_vetor} from './vetor_utils.js'

function main(){
    const input = ordenar_vetor([12, 46, 32, 64])

    const media = media_elementos(input)
    const median = mediana_vetor(input)
    console.log(input)
    console.log(`{ mean: ${media} median: ${median} }`) //no site a mediana é 32, mas o calculo certo é 39
}

main()