//import {input} from './io_utils.js'
import fs from 'fs'
var input = fs.readFileSync('mensagem_oculta.txt', 'utf8');
var lines = input.split('\n');

function main(){
    const casos = lines[0]
    let texto,mensagem_oculta

    for(let i = 1; i <= casos; i++){
        texto = lines[i].split(' ')
        mensagem_oculta =get_first_letter(texto)
        console.log(mensagem_oculta)
    }

    

}

function get_first_letter(texto){
    let letras = ''

    for(let palavra of texto){
        if(eh_letra(palavra)){
            letras += palavra[0]
        }
    }

    return letras
}

function eh_letra(caractere){
    if(caractere !== ''){
        return true
    }

    return false
}

main()