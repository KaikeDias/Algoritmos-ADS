//import {input} from './io_utils.js'
import fs from 'fs'
var input = fs.readFileSync('justificador.txt', 'utf8');
var lines = input.split('\n');

//Eu consegui fazer a questao mas o bee dava erro de limite de memoria execida ou tempo limite excedido, tentei de todas as formas consertar mas nao consegui

function main(){
    let numero_palavras 
    let palavras = []
    let palavra,espacos,palavra_formatada
    let index = 0

    while(numero_palavras !== 0){
        numero_palavras = Number(lines[index])
        index++
        if(numero_palavras === 0){
            break
        }
        for(let i = 0; i < numero_palavras; i++){
            palavra = lines[index]
            index++
    
            palavras.push(palavra)
        }
    
        const tamanho_maior = tamanho_maior_palavra(palavras)
    
        for(let palavra of palavras){
            espacos = tamanho_maior-palavra.length
            palavra_formatada = adicionar_espacos(palavra,espacos)
            console.log(palavra_formatada)
        }
    }
    
}
function adicionar_espacos(palavra, espacos){
    let palavra_formatada = ''

    for(let i = 0; i < espacos; i++){
        palavra_formatada += ' '
    }

    palavra_formatada += palavra

    return palavra_formatada
}

function tamanho_maior_palavra(palavras){
    let maior = 0

    for(let palavra of palavras){
        if(palavra.length > maior){
            maior = palavra.length
        }
    }

    return maior
}

main()