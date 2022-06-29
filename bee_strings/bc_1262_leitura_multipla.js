//import {input} from './io_utils.js'
import fs from 'fs'
var input = fs.readFileSync('leitura_multipla.txt', 'utf8');
var lines = input.split('\n');

function main(){
    let index = 0
    let letras
    let processos
    let resultado

    while(lines[index] !== ''){
        //letras = input('Letras: ')
        letras = lines[index]
        index++
        //processos = Number(input('Qtd processos: '))
        processos = Number(lines[index])
        
        resultado = get_qtd_processos(letras,processos)
        
        console.log(resultado)
        index++
    }
}

function get_qtd_processos(letras,processos){
    let cont = 0
    let cont_r = 0

    for(let i = 0; i < letras.length; i++){
        if(letras[i] === 'W'){
            cont++
        }else if(letras[i] === 'R'){
            cont_r++
            if(cont_r === processos || letras[i+1] === 'W'){
                cont++
                cont_r = 0
            }
        }
    }

    if(cont_r > 0){
        cont++
    }

    return cont
}

main()