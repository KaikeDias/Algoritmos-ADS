import * as fs from 'fs'

function main(){
    const palavras = loadfile().split('\n')

    palavras_20(letras)
}

function palavras_20(palavras){
    let cont = 0
    for (let letras of palavras){
        if (letras.length > 20){
            console.log(palavra)
            cont++
        }
    }
    console.log(`Existem ${cont} com mais de 20 letras`)
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