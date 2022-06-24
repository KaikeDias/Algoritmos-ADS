import {input} from '../io_utils.js'
import {new_matriz, preencher_matriz, show_matriz, transpor_matriz} from '../matriz_utils.js'

function main(){
    const N = Number(input('N: '))
    let matriz = new_matriz(N, N)
    matriz = preencher_matriz(matriz, 3)
    const matriz_transposta = transpor_matriz(matriz,N)
    
    show_matriz(matriz)
    show_matriz(matriz_transposta)

    if(eh_simetrica(matriz)){
        console.log('É simétrica')
    }else{
        console.log('Não é simétrica')
    }

}

function eh_simetrica(matriz){
    let simetrica = true

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] !== matriz[j][i]){
                simetrica = false
            }
        }
    }

    return simetrica
}

main()