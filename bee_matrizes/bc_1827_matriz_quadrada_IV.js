// import {input} from './io_utils.js'
// import { new_matriz, show_matriz } from './matriz_utils.js'
import fs from 'fs'
var input = fs.readFileSync('matriz_quadrada_IV.txt', 'utf8');
var lines = input.split('\n');

function main(){
    let matriz
    let ordem
    let index = 0
    
    while(lines[index] !== ''){
        //ordem = Number(input('Ordem: '))
        ordem = Number(lines[index])
        matriz = new_matriz(ordem,ordem)
        matriz = matriz_quadrada_IV(matriz,ordem)

        mostrar_matriz(matriz)
        index++
    }

}

function mostrar_matriz(matriz){
    for(let linha of matriz){
        console.log(linha.join(''))
    }
    console.log('')
}

function matriz_quadrada_IV(matriz,ordem){
    const condicao_1 = Math.trunc(ordem/3)
    
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(verticais_horizontais(i,j,ordem)){
                matriz[i][j] = 0
            }
            if(i === j){
                matriz[i][j] = 2
            }
            if(i + j === ordem-1){
                matriz[i][j] = 3
            }
            if(i >= condicao_1 && i <= ordem - 1 - condicao_1){
                if(j >= condicao_1 && j <= ordem - 1 - condicao_1){
                    matriz[i][j] = 1
                }
            }
            if(i === (ordem-1)/2 && j === (ordem-1)/2){
                matriz[i][j] = 4
            }
        }
    }

    return matriz
}

function verticais_horizontais(i,j,ordem){
    if(acima_diagonal_principal(i,j) || acima_diagonal_secundaria(i,j,ordem) || abaixo_diagonal_principal(i,j) || abaixo_diagonal_secundaria(i,j,ordem)){
        return true
    }

    return false
}

const acima_diagonal_principal = (i,j) => i < j
const abaixo_diagonal_principal = (i,j) => i > j
const acima_diagonal_secundaria = (i, j, ordem) => i + j < ordem - 1 
const abaixo_diagonal_secundaria = (i, j, ordem) => i + j > ordem - 1 

function new_matriz(qtd_linhas, qtd_colunas){
    const matriz = new Array(qtd_linhas)

    for(let i = 0; i < qtd_linhas; i++){
        matriz[i] = new Array(qtd_colunas)
    }

    return matriz
}

main()