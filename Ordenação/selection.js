//import {ordenar_selection} from './vetor_utils.js'

function main(){
    const vetor = [42, -15, 28, 5, 8, 20]
    console.log(vetor)

    const vetor_ordenado = ordenar_selection(vetor)
    console.log(vetor_ordenado)
}

function ordenar_selection(vetor){
    let menor 
    let tamanho = vetor.length
    let aux

    for(let i = 0; i < tamanho; i++){
        menor = i
        for(let j = i; j < tamanho; j++){
            if(vetor[j] < vetor[menor]){
                aux = vetor[j]
                vetor[j] = vetor[menor]
                vetor[menor] = aux
            }
        }
    }

    return vetor
}

main()