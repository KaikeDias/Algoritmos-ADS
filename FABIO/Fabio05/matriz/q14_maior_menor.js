import {input} from '../io_utils.js'
import { new_matriz, pos_maior_menor_matriz, preencher_matriz, show_matriz } from '../matriz_utils.js'

function main(){
    const N = Number(input('N: '))
    let matriz = new_matriz(N, N)
    matriz = preencher_matriz(matriz)

    const [linha_maior,coluna_maior,linha_menor,coluna_menor] = pos_maior_menor_matriz(matriz)

    show_matriz(matriz)
    console.log(`Maior elemento: ${matriz[linha_maior][coluna_maior]}`)
    console.log(`Linha: ${linha_maior}`)
    console.log(`Coluna: ${coluna_maior}`)
    console.log(`Menor elemento: ${matriz[linha_menor][coluna_menor]}`)
    console.log(`Linha: ${linha_menor}`)
    console.log(`Coluna: ${coluna_menor}`)

}

main()