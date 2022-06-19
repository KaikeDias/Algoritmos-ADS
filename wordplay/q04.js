import * as fs from 'fs'
import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const palavras = loadfile().split('\n')

    only_letters(palavras)
}

function only_letters(palavras){
    let cont = 0
    const letras_selecionadas = input('Digite as letras que deseja usar: ')
    for(let palavra of palavras){
        if(uses_only(palavra,letras_selecionadas)){
            console.log(palavra)
            cont++
        }
    }
    const percentual = ((cont * palavras.length) * 100).toFixed(3)
    console.log(`Existem ${cont} ${percentual} palavras com as letras digitadas`)
}

function uses_only(palavra,letras_selecionadas){
    for(let letra of palavra){
        if(!contem(letra,letras_selecionadas)){
            return false
        }
    }
    return true
}

function contem(letra,letras_selecionadas){
    for(let caractere of letras_selecionadas){
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