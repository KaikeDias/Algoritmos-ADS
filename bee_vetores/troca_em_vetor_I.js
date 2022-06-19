import {input} from './io_utils.js'

function main(){
    const vetor = novo_vetor(20)

    for(let i = 0; i < 20; i++){
        vetor[i] = Number(input(`Elemento ${i}: `))
    }

    const vetor_trocado = trocar(vetor)

    for(let i = 0; i < vetor_trocado.length; i++){
        console.log(`N[${i}] = ${vetor_trocado[i]}`)
    }

}

function trocar(vetor){
    const vetor_trocado = novo_vetor(20)
    let j = vetor.length-1

    for(let i = 0; i < 10; i++){
        vetor_trocado[i] = vetor[j]
        vetor_trocado[j] = vetor[i]
        j--
    }

    return vetor_trocado
}

function novo_vetor(tamanho){
    const vetor = new Array(tamanho)

    return vetor
}

main()