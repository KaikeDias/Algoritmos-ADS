import {input} from './io_utils.js'

function main(){
    const vetor = novo_vetor(10)

    vetor[0] = Number(input(`ELemento 0: `))
    let elemento = vetor[0]
    
    for(let i = 1; i < vetor.length; i++){
        elemento *=2
        vetor[i] = elemento
    }

    console.log(vetor)

}

function novo_vetor(tamanho){
    const vetor = new Array(tamanho)

    return vetor
}

main()