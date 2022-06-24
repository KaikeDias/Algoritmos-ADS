import {input} from '../io_utils.js'
import {criar_matriz_identidade, show_matriz} from '../matriz_utils.js'

function main(){
    const N = Number(input('N: '))
    const matriz_identidade = criar_matriz_identidade(N)

    show_matriz(matriz_identidade)
}   

main()