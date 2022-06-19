import {input} from './io_utils.js'

function main(){
    const N = Number(input('N: '))
    const vetor = novo_vetor(9)
    let j = 0
    for(let i = 0; i < vetor.length; i++){
        if(j !== N){
            vetor[i] = j
            console.log(`N[${i}] = ${j}`)
            j++
        }else{
            j = 0
            vetor[i] = j
            console.log(`N[${i}] = ${j}`)
            j++
        }
    }

}

function novo_vetor(tamanho){
    const vetor = new Array(tamanho)

    return vetor
}

main()