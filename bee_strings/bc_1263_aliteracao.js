//import {input} from './io_utils.js'
import fs from 'fs'
var input = fs.readFileSync('aliteracao.txt', 'utf8');
var lines = input.split('\n');

function main(){
    let cont = 0
    let texto = lines[cont].toLowerCase().split(' ')
    let aliteracoes
    while(lines[cont] !== ''){
        cont++
        aliteracoes = contar_aliteracao(texto)
        console.log(aliteracoes)
        texto = lines[cont].toLowerCase().split(' ')
    }
    
}

function contar_aliteracao(texto){
    let cont = 0
    let palavra_anterior
    let proxima_palavra

    for(let i = 0; i < texto.length; i++){
        palavra_anterior = texto[i-1]
        proxima_palavra = texto[i+1]
       
        if(get_aliteracao(texto[i],proxima_palavra) && !get_aliteracao(texto[i],palavra_anterior)){
            cont++
        }

    }

    return cont
}

function get_aliteracao(palavra_atual,proxima_anterior){
    if(palavra_atual !== undefined && proxima_anterior !== undefined){
        if(palavra_atual[0] === proxima_anterior[0]){
            return true
        }
    }

    return false
}

main()