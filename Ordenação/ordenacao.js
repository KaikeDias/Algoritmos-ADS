import {input} from './io_utils.js'

function main(){
    const vetor = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
    console.log('-----ANTES-----')
    console.log(vetor)

    let aux
    for(let cont = 0; cont < 15; cont++){
        for(let i = 0; i < 15; i++){
            if(vetor[i] > vetor[i+1]){
                aux = vetor[i]
                vetor[i] = vetor[i+1]
                vetor[i+1] = aux
            }
        }
    }
    console.log('-----DEPOIS-----')
    console.log(vetor)
}

main()