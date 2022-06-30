// import {input} from './io_utils.js'
// import { new_matriz, show_matriz } from './matriz_utils.js'
import fs from 'fs'
var input = fs.readFileSync('matriz_quadrada_II.txt', 'utf8');
var lines = input.split('\n').map(Number);

function main(){
    let ordem,matriz,matriz_formatada,matriz_preenchida
    let index = 0
    while(lines[index] !== 0){
        //ordem = Number(input('Ordem: '))
        ordem = lines[index]
        matriz = new_matriz(ordem,ordem)
        matriz_preenchida = preencher_matriz(matriz,ordem)
        matriz_formatada = formatar_matriz(matriz_preenchida)

        mostrar_matriz(matriz_formatada)
        index++
    }

}
function mostrar_matriz(matriz){
    for(let linha of matriz){
        console.log(linha.join(''))
    }
    console.log('')
}

function formatar_matriz(matriz){
    let elemento 
    let matriz_formatada = new_matriz(matriz.length,matriz.length)

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(j === 0){
                elemento = `${matriz[i][j]}`
                matriz_formatada[i][j] = get_espaco(3 - elemento.length) + elemento
            }else{
                elemento = `${matriz[i][j]}`
                matriz_formatada[i][j] = get_espaco(4 - elemento.length) + elemento
            }
        }
    }

    return matriz_formatada
}


function preencher_matriz(matriz){
    let valor_referencia

    for(let i = 0; i < matriz.length; i++){
        matriz[i][0] = i+1
    }

    for(let i = 0; i < matriz.length; i++){
        valor_referencia = 1
        for(let j = 1; j < matriz[i].length; j++){
            if(matriz[i][j-1] > valor_referencia){
                matriz[i][j] = matriz[i][j-1] - 1
            }else{
                valor_referencia++
                matriz[i][j] = valor_referencia
            }
        }
    }

    return matriz
}

function new_matriz(qtd_linhas, qtd_colunas){
    const matriz = new Array(qtd_linhas)

    for(let i = 0; i < qtd_linhas; i++){
        matriz[i] = new Array(qtd_colunas)
    }

    return matriz
}

function get_espaco(numero) {
    let espaco = ''

    for(let i = 0; i < numero; i++) {
        espaco += ' '
    }

    return espaco
}

main()