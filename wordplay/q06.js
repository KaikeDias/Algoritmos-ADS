import * as fs from 'fs'
import prompt from 'prompt-sync'
const input = prompt()

function main(){
    //Entrada
    const palavras = loadfile().split('\n')

    //Saida
    console.log(`Existem ${palavras_na_ordem(palavras)} palavras que estão em ordem alfabética`)
}

//Processamento
function ordem(letra) {
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz'

    for (let index in alfabeto) {
        if(alfabeto[index]=== letra){
            return Number(index) + 1
        }
    }
}

function abecedario(palavra){
    
    let cont = 0
    let letra_repetida = 1

    while(cont !== palavra.length) {

        let proxima_letra = ordem(palavra[cont])

        if(proxima_letra >= letra_repetida) {
            letra_repetida = proxima_letra
            cont++
        } else {
            return false
        }
    }
    return true
}


function palavras_na_ordem(palavras) {
    let cont = 0
    for (let palavra of palavras) {
        if(abecedario(palavra)){
            console.log(palavra)
            cont++
        }
    }
    return cont
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