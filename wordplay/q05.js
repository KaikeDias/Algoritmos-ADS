import * as fs from 'fs'
import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const palavras = loadfile().split('\n')

    letras_obrigatorias(palavras)
}

function letras_obrigatorias(palavras){
    let cont = 0
    const letras_obrigatorias = input('Digite as letras obrigatorias: ')
    for(let palavra of palavras){
        if(uses_all(palavra,letras_obrigatorias)){
            cont++
        }
    }
    console.log(`Existem ${cont} palavras com as letras digitadas`)
}

function uses_all(palavra,letras_obrigatorias){
    let letras_usadas = ''
    let contador = 0
    
    for(let letra of palavra){
        if(contem(letra,letras_obrigatorias) && !contem(letra,letras_usadas)){
            letras_usadas += letra
            contador++
        }
    }
    if(contador === letras_obrigatorias.length){
        return true
    }else{
        return false
    }
    
}

function contem(letra,letras_obrigatorias){
    for(let caractere of letras_obrigatorias){
        if(caractere === letra){
            return true
        }
    }
    return false
}

function loadfile(){
    try{
        const data = fs.readFileSync('palavras.txt', 'utf-8')
        return data
    } catch (error){
        console.error(error)
    }
}


main()