import * as fs from 'fs'
import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const palavras = loadfile().split('\n')

    letras_proibidas(palavras)
}

function letras_proibidas(palavras){
    const letras_prob = input('Digite as letras proibidas: ')
    let cont = 0
    for (let palavra of palavras){
        if (avoids(palavra,letras_prob)){
            cont++
        }
    }
    console.log(`Existem ${cont} palavras sem as letras ${letras_prob}`)
}

function avoids(palavra,letras_prob){
    for (let letra of palavra){
        if(contem(letras_prob,letra)){
            return false
        }
    }
    return true
}

function contem(palavra,letra){
    for (let caractere  of palavra){
        if (caractere === letra){
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