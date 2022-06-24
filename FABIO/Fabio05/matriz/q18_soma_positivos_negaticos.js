import {input} from '../io_utils.js'
import {new_matriz, show_matriz, soma_positivos_negativos_matriz} from '../matriz_utils.js'

function main(){
    const N = Number(input('N: '))
    const matriz = new_matriz(N, N)

    for(let i = 0; i < N; i++){
        for(let j = 0; j < N;j++){
            matriz[i][j] = Number(input(`Numero da posicao [${i},${j}]: `))
        }
    }

    const [positivos,negativos] = soma_positivos_negativos_matriz(matriz)

    show_matriz(matriz)
    console.log(`Soma dos numeros positivos: ${positivos}`)
    console.log(`Soma dos numeros negativos: ${negativos}`)
}

main()