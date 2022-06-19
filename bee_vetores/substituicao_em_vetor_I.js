import {input} from './io_utils.js'

function main(){
    const vetor = novo_vetor(10)

    for(let i = 0; i < 10; i++){
        vetor[i] = Number(input(`Elemento ${i}: `))
        if(vetor[i] <= 0){
            vetor[i] = 1
        }
        console.log(`X[${i}] = ${vetor[i]}`)
    }
    
}

function novo_vetor(tamanho){
    const vetor = new Array(tamanho)

    return vetor
}

main()