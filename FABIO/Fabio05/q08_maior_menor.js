import {input} from './io_utils.js'
import {novo_vetor} from './vetor_utils.js'

function main(){
    const N = Number(input('Quantidade de elementos do vetor: '))
    const vetor = novo_vetor(N)

    for(let i = 0; i < N; i++){
        vetor[i] = Number(input(`Elemento ${i}: `))
    }

    const [maior,pos_maior] = maior_elemento(vetor, N)
    const [menor,pos_menor] = menor_elemento(vetor, N)


    console.log(`Maior: ${maior}`)
    console.log(`Posição do maior: ${pos_maior}`)
    console.log(`Menor: ${menor}`)
    console.log(`Posição do menor: ${pos_menor}`)

}   

function maior_elemento(vetor, N){
    let maior = 0
    let pos_maior = 0

    for(let i = 0; i < N; i++){
        if(vetor[i] > maior){
            maior = vetor[i]
            pos_maior = i
        }
    }

    return [maior,pos_maior]
}

function menor_elemento(vetor, N){
    let menor = vetor[0]
    let pos_menor = 0

    for(let i = 0; i < N; i++){
        if(vetor[i] < menor){
            menor = vetor[i]
            pos_menor = i
        }
    }

    return [menor,pos_menor]
}


main()