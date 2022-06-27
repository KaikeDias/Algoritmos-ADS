// import {input} from './io_utils.js'
// import {contem_caractere, eh_letra} from './strings_utils.js'
import fs from 'fs'
var input = fs.readFileSync('frequencia_letras.txt', 'utf8');
var lines = input.split('\n');

function main(){
    const casos = Number(lines[0])
    let texto,letras_frequentes

    for(let i = 1; i <= casos; i++){
        texto = lines[i]
        letras_frequentes = frequencia(texto)
        console.log(letras_frequentes)
    }

}

function frequencia(texto){
    const letras = get_letters(texto)
    let letras_frequentes = ''
    let maior = 0 
    let cont 

    for(let i = 0; i < letras.length; i++){
        cont = 0
        for(let j = 0; j < letras.length;j++){
            if(letras[i] === letras[j]){
                cont++
            }
        }
        if(cont > maior){
            maior = cont
            letras_frequentes = `${letras[i]}`
        }else if(cont === maior){
            if(!contem_caractere(letras_frequentes,letras[i])){
                letras_frequentes += `${letras[i]}`
            }
        }
    }

    return letras_frequentes.split('').sort().join('')
}

function get_letters(texto){
    let letters = ''

    for(let letter of texto){
        if(eh_letra(letter)){
            letters += letter.toLowerCase()
        }
    }

    return letters
}

function contem_caractere(texto, caractere){
    for(let i = 0; i < texto.length; i++){
        if(texto[i] === caractere){
            return true
        }
    }
    
    return false
}

function eh_letra(caractere){
    let codigo = ASCII(caractere)

    return ((codigo >= 65 && codigo <= 90) || (codigo >= 97 && codigo <= 122)) 

}

function ASCII(caractere){
    return caractere.charCodeAt(0)
}

main()