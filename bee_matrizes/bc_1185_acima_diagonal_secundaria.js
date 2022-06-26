// import {input} from './io_utils.js'
// import { new_matriz, preencher_matriz, show_matriz } from './matriz_utils.js'
import fs from 'fs'
var input = fs.readFileSync('acima_diagonal_secundaria.txt', 'utf8');
var lines = input.split('\n');

function main(){
    let matriz = new_matriz(12,12)
    //const operacao = input('Operação: ')
    const operacao = lines[0]
    let index = 1

    for(let i = 0; i < 12; i++){
        for(let j = 0; j < 12; j++){
            matriz[i][j] = Number(lines[index])
            index++
        }
    }


    if(operacao === 'S'){
        const soma = get_soma(matriz)
        console.log(soma.toFixed(1))
    }else if(operacao === 'M'){
        const media = get_media(matriz)
        console.log(media.toFixed(1))
    }


}

function get_soma(matriz){
    let soma = 0

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(acima_diagonal_secundaria(i,j, 12)){
                soma += matriz[i][j]
            }
        }
    }

    return soma
}

function get_media(matriz){
    let soma = 0
    let cont = 0

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(acima_diagonal_secundaria(i,j, 12)){
                soma += matriz[i][j]
                cont++
            }
        }
    }

    const media = soma/cont

    return media
}

function new_matriz(qtd_linhas, qtd_colunas){
    const matriz = new Array(qtd_linhas)

    for(let i = 0; i < qtd_linhas; i++){
        matriz[i] = new Array(qtd_colunas)
    }

    return matriz
}

const acima_diagonal_secundaria = (i, j, ordem) => i + j < ordem - 1 

main()