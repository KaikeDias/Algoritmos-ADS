import {input} from './io_utils.js'

function main(){
    const vetor = novo_vetor(10)

    for(let i = 0; i < 10; i++){
        vetor[i] = Number(input(`Elemento ${i}: `))
    }

    for(let i = 0; i < 100; i++){
        if(vetor[i] <= 10){
            console.log(`A[${i}] = ${vetor[i].toFixed(1)}`)
        }
        
    }
    
}

function novo_vetor(tamanho){
    const vetor = new Array(tamanho)

    return vetor
}

main()