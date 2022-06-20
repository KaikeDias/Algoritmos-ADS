import {input} from './io_utils.js'
import {novo_vetor} from './vetor_utils.js'

function main(){
    const tamanho = Number(input('Tamanho: '))
    const vetor = novo_vetor(tamanho)

    console.log('-----Intervalo-----')
    const valor_inicial = Number(input('Valor inicial: '))
    const valor_final = Number(input('Valor final: '))

    for(let i = 0; i < vetor.length; i++){
        vetor[i] = numero_aleatorio(valor_inicial,valor_final)
    }


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

function numero_aleatorio(valor_inicial,valor_final){
    const numero = Math.random() * (valor_final - valor_inicial)

    return Math.trunc(numero) + valor_inicial
}

main()