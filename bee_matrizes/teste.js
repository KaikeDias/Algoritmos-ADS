import {input} from './io_utils.js'
import { filter_matriz, new_matriz, preencher_matriz, show_matriz } from './matriz_utils.js'
import {eh_par} from './utils.js'

function main(){
    let matriz = new_matriz(4,4)
    matriz = preencher_matriz(matriz)

    const pares = filter_matriz(matriz, eh_par)

    show_matriz(matriz)
    show_matriz(pares)
}

main()

