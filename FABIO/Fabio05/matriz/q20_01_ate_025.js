import {new_matriz, show_matriz} from '../matriz_utils.js'

function main(){
    let matriz = new_matriz(5, 5)
    
    matriz = preenchimento(matriz)

    show_matriz(matriz)

}

//A matriz irá ficar com os elementos em formato de string porque se fosse no formato Number o 0 a esquerda nao iria aparecer
function preenchimento(matriz){
    let cont = 1
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            if(cont < 10){
                matriz[i][j] = `0${cont}` 
            }else{
                matriz[i][j] = `${cont}`
            }
            cont++
        }
    }

    return matriz
}

main()