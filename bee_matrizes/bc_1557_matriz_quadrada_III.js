// import {input} from './io_utils.js'
// import { new_matriz, show_matriz } from './matriz_utils.js'
import fs from 'fs'
var input = fs.readFileSync('matriz_quadrada_III.txt', 'utf8');
var lines = input.split('\n').map(Number);

function main(){
    let index = 0
    let matriz
    let ordem
    
    while(lines[index] !== 0){
        //const ordem = Number(input('Ordem: '))
        ordem = lines[index]
        matriz = new_matriz(ordem,ordem)
        matriz = preencher_matriz(matriz,ordem)
        matriz = formatar_matriz(matriz)

        for(let linha of matriz){
            console.log(`${linha.join('')}`)
        }
        console.log('')
        
        index++
    }

}

function formatar_matriz(matriz){
    let elemento 

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(j === 0){
                elemento = `${matriz[i][j]}`
                matriz[i][j] = get_espaco(3 - elemento.length) + elemento
            }else{
                elemento = `${matriz[i][j]}`
                matriz[i][j] = get_espaco(4 - elemento.length) + elemento
            }
        }
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

function preencher_matriz(matriz,ordem){

    for(let i = 0; i < ordem; i++){
        for(let j = 0; j < ordem; j++){
            if(i === 0 && j === 0){
                matriz[i][j] = 1
            }else if(i === 0 && j > 0){
                matriz[i][j] = matriz[i][j-1] * 2
            }else if(i > 0 && j === 0){
                matriz[i][j] = matriz[i-1][j] * 2
            }else{
                matriz[i][j] = matriz[i][j-1] * 2
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

main()