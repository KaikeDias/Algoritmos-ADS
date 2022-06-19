import {input} from './io_utils.js'

function main(){
    const tamanho = Number(input('N: '))
    const vetor = novo_vetor(tamanho)
    const numeros = input('Numeros: ').split(' ').map(Number)

    for(let i = 0; i < numeros.length; i++){
        vetor[i] = numeros[i]
    }

    const [menor, pos] = menor_pos(vetor)

    console.log(`Menor valor: ${menor}`)
    console.log(`Posicao: ${pos}`)

}

function menor_pos(vetor){
    let menor = 10000
    let pos = 0

    for(let i = 0; i < vetor.length;i++){
        if(vetor[i] < menor){
            menor = vetor[i]
            pos = i
        }
    }

    return [menor, pos]
}

function novo_vetor(tamanho){
    const vetor = new Array(tamanho)

    return vetor
}

main()