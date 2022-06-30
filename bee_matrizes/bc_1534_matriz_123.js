// import {input} from './io_utils.js'
import fs from 'fs'
var input = fs.readFileSync('matriz_123.txt', 'utf8');
var lines = input.split('\n');

function main(){
    let index = 0

    while(lines[index] !== ''){
        //const ordem = Number(input('Ordem: '))
        const ordem = Number(lines[index])
        let matriz = new_matriz(ordem,ordem)
        matriz = preencher_matriz_123(matriz,ordem)

        mostrar_matriz(matriz)
        index++
    }

}

function mostrar_matriz(matriz){
    for(let linha of matriz){
        console.log(linha.join(''))
    }
}

function preencher_matriz_123(matriz,ordem){
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(verticais_horizontais(i,j,ordem)){
                matriz[i][j] = 3
            }
            if(i === j){
                matriz[i][j] = 1
            }
            if(i + j === ordem - 1){
                matriz[i][j] = 2
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

function new_matriz(qtd_linhas, qtd_colunas){
    const matriz = new Array(qtd_linhas)

    for(let i = 0; i < qtd_linhas; i++){
        matriz[i] = new Array(qtd_colunas)
    }

    return matriz
}

const acima_diagonal_principal = (i,j) => i < j
const abaixo_diagonal_principal = (i,j) => i > j
const acima_diagonal_secundaria = (i, j, ordem) => i + j < ordem - 1 
const abaixo_diagonal_secundaria = (i, j, ordem) => i + j > ordem - 1 

main()