import { new_matriz, show_matriz } from "../matriz_utils.js"

function main(){
    let matriz = new_matriz(6,6)
    
    matriz = preenchimento(matriz)

    show_matriz(matriz)
}

function preenchimento(matriz){
    for(let i = 0; i < 6; i++){
        for(let j = 0; j < 6; j++){
            if(i === 0 || i === 5 || j === 0 || j === 5){
                matriz[i][j] = 1
            }else if((i === 2 && j === 2) || (i === 2 && j === 3) || (i === 3 && j === 2) || (i === 3 && j === 3)){
                matriz[i][j] = 3
            }else{
                matriz[i][j] = 2
            }
        }
    }

    return matriz
}

main()