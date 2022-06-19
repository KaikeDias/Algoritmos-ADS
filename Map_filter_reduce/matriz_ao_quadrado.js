import {novo_vetor, vetor_quadrado} from './vetor_utils.js'

function main(){
    const vetor = novo_vetor(5)

    for(let i = 0; i < 5; i++){
        vetor[i] = i + 1 
    }

    const quadrado = vetor_quadrado(vetor)

    console.log(vetor)
    console.log(quadrado)
}

main()