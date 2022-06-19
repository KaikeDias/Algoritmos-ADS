import * as fs from 'fs'

function main(){
    const palavras = loadfile().split('\n')

    palavras_sem_e(palavras)
}

function palavras_sem_e(palavras){
    let cont = 0
    for (let palavra of palavras){
        if (has_no_e(palavra)){
            console.log(palavra)
            cont++
        }
    }
    const percentual = (cont / palavras.length)*100
    console.log(`Existem ${cont} ${percentual.toFixed(3)}% sem a letra e`)
}



function has_no_e(palavra){
    for (let letra of palavra){
        if (letra === 'e'){
            return false
        }
    }
    return true

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