//import {input} from './io_utils.js'
import fs from 'fs'
var input = fs.readFileSync('atalhos_bloggo.txt', 'utf8');
var lines = input.split('\n');

function main(){
    let texto
    let novo_texto
    let cont = 0

    while(texto !== ''){
        texto = lines[cont]
        cont++
        if(texto === ''){
            break
        }
        novo_texto = trocar(texto)
        console.log(novo_texto)
    }
}

function trocar(texto){
    let novo_texto = ''
    let cont_underline = 0
    let cont_asterisco = 0

    for(let i = 0; i < texto.length; i++){
        if(texto[i] === '_'){
            if(eh_par(cont_underline)){
                novo_texto += '<i>'
            }else{
                novo_texto += '</i>'
            }
            cont_underline++
        }else if(texto[i] === '*'){
            if(eh_par(cont_asterisco)){
                novo_texto += '<b>'
            }else{
                novo_texto += '</b>'
            }
            cont_asterisco++
        }else{
            novo_texto += texto[i]
        }
    }

    return novo_texto
}

const eh_par = n => n % 2 === 0

main()