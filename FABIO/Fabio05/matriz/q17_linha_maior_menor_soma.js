import {input} from '../io_utils.js'
import {linha_maior_menor_soma, new_matriz, preencher_matriz, show_matriz} from '../matriz_utils.js'

function main(){
    const N = Number(input('N: '))
    let matriz = new_matriz(N,N)
    matriz = preencher_matriz(matriz)

    const [linha_maior,linha_menor] = linha_maior_menor_soma(matriz)

    show_matriz(matriz)
    console.log(`Linha com a maior soma: ${linha_maior}`)
    console.log(`Linha com a menor soma: ${linha_menor}`)
}


main()