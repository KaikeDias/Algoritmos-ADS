import {input} from '../io_utils.js'
import {new_matriz,preencher_matriz,show_matriz,transpor_matriz} from '../matriz_utils.js'

function main(){
    const N = Number(input('N: '))
    
    let matriz = new_matriz(N,N)

    matriz = preencher_matriz(matriz)
    const matriz_transposta = transpor_matriz(matriz, N)

    show_matriz(matriz)
    show_matriz(matriz_transposta)
}

main()