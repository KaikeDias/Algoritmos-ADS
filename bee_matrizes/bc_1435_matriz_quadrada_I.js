// import {input} from './io_utils.js'
// import { new_matriz } from './matriz_utils.js'
import fs from 'fs'
var input = fs.readFileSync('matriz_quadrada_I.txt', 'utf8');
var lines = input.split('\n').map(Number);

function main(){
    let ordem,matriz
    let index = 0
    while(lines[index] !== 0){
        //ordem = Number(input('Ordem: '))
        ordem = lines[index]
        matriz = new_matriz(ordem,ordem)
        matriz = preencher_matriz_funil(matriz,ordem)
        const matriz_formatada = formatar_matriz(matriz)

        mostrar_matriz(matriz_formatada)
        index++
    }

}

function mostrar_matriz(matriz){
    for(let linha of matriz){
        console.log(linha)
        console.log(linha.join(''))
    }
    console.log('')
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

function preencher_matriz_funil(matriz,ordem){
    for(let externo = 0, interno = ordem-1; externo < ordem; externo++,interno--){
        for(let i = 0; i < ordem; i++){
            for(let j = 0; j < ordem; j++){
                if(i === externo || i === interno || j === externo || j === interno){
                    if(campo_vazio(matriz,i,j)){
                        matriz[i][j] = externo + 1
                    }
                }
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

function new_matriz(qtd_linhas, qtd_colunas){
    const matriz = new Array(qtd_linhas)

    for(let i = 0; i < qtd_linhas; i++){
        matriz[i] = new Array(qtd_colunas)
    }

    return matriz
}

const campo_vazio = (matriz,i,j) => matriz[i][j] === undefined

main()