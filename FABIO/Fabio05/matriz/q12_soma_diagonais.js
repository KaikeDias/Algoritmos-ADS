import {input} from '../io_utils.js'
import {new_matriz, preencher_matriz, show_matriz} from '../matriz_utils.js'

function main(){
    const N = Number(input('N: '))
    let matriz = new_matriz(N,N)
    matriz = preencher_matriz(matriz)

    const soma_diagonal1 = soma_diagonal_principal(matriz,N)
    const soma_diagonal2 = soma_diagonal_secundaria(matriz,N)
    const soma_restante = soma_resto(matriz,N)

    show_matriz(matriz)
    console.log(soma_diagonal1)
    console.log(soma_diagonal2)
    console.log(soma_restante)
}

function soma_diagonal_principal(matriz, N){
    let soma = 0

    for(let i = 0; i < N; i++){
        soma += matriz[i][i]
    }

    return soma
}

function soma_diagonal_secundaria(matriz, N){
    let soma = 0

    for(let i = 0; i < N; i++){
        for(let j = 0; j < N; j++){
            if(soma_igual_a_ordem(i,j,N)){
                soma += matriz[i][j]
            }
        }
    }

    return soma
}

function soma_resto(matriz,N){
    let soma = 0

    for(let i = 0; i < N; i++){
        for(let j = 0; j < N; j++){
            if(i !== j && !soma_igual_a_ordem(i,j,N)){
                soma += matriz[i][j]
            }
        }
    }

    return soma
}

function soma_igual_a_ordem(linha,coluna,N){
    return linha + coluna === N-1
}

main()