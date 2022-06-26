// import {input} from './io_utils.js'
//import { new_matriz, show_matriz } from './matriz_utils.js'
import fs from 'fs'
var input = fs.readFileSync('coluna_matriz.txt', 'utf8');
var lines = input.split('\n');

function main(){

    const matriz = new_matriz(12,12)
    // const linha = Number(input('Linha: '))
    // const operacao = input('Operação: ')
    const coluna = Number(lines[0])
    const operacao = lines[1]
    let index = 2

    for(let i = 0; i < 12; i++){
        for(let j = 0; j < 12; j++){
            //matriz[i][j] = Number(input('Numero: '))
            matriz[i][j] = Number(lines[index])
            index++
        }
    }

    if(operacao === 'S'){
        const soma = get_soma(matriz,coluna)
        console.log(soma.toFixed(1))
    }else if(operacao === 'M'){
        const media = get_media(matriz,coluna)
        console.log(media.toFixed(1))
    }
}

function get_media(matriz,coluna){
    let soma = 0

    for(let i = 0; i < 12; i++){
        soma += matriz[i][coluna]
    }

    const media = soma/12

    return media
}

function get_soma(matriz, coluna){
    let soma = 0

    for(let i = 0; i < 12; i++){
        soma += matriz[i][coluna]
    }
    
    return soma
}

function new_matriz(qtd_linhas, qtd_colunas){
    const matriz = new Array(qtd_linhas)

    for(let i = 0; i < qtd_linhas; i++){
        matriz[i] = new Array(qtd_colunas)
    }

    return matriz
}

main()