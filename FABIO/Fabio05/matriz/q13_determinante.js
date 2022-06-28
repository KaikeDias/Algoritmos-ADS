import { input_number } from '../io_utils.js'
import { determinante_ordem_2, determinante_ordem_3, new_matriz, preencher_matriz, show_matriz } from '../matriz_utils.js'

function main(){
    const ordem = input_number('Ordem da matriz (2 ou 3): ')
    let matriz = new_matriz(ordem,ordem)
    matriz = preencher_matriz(matriz)

    show_matriz(matriz)
    
    const determinante = get_determinante(matriz,ordem)

    console.log(`O determinante da matriz de ordem ${ordem} é: ${determinante}`)
}

function get_determinante(matriz,ordem){
    let determinante

    if(ordem === 2){
        determinante = determinante_ordem_2(matriz)
    }else if(ordem === 3){
        determinante = determinante_ordem_3(matriz)
    }

    return determinante
}   

main()