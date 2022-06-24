import {map_matriz, new_matriz, preencher_matriz, show_matriz} from '../matriz_utils.js'
import {dobrar} from '../utils.js'

function main(){
    let matriz = new_matriz(3,4)
    matriz = preencher_matriz(matriz,2)
    const nova_matriz = map_matriz(matriz, 3, 4, dobrar)

    show_matriz(matriz)
    show_matriz(nova_matriz)
}

// function map_matriz(matriz,qtd_linhas,qtd_colunas, funcao){
//     const nova_matriz = new_matriz(qtd_linhas,qtd_colunas) 

//     for(let i = 0; i < matriz.length; i++){
//         for(let j = 0; j < matriz[i].length; j++){
//             nova_matriz[i][j] = funcao(matriz[i][j])
//         }
//     }

//     return nova_matriz
// }

//const dobrar = valor => valor*2

main()