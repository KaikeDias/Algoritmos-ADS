import {input} from './io_utils.js'

function main(){
    let index = 0
    let cont = 0 
    let qtd = Number(lines[index++])
    let x,y
    let valores
    let quociente
    while(cont < qtd){
        valores = lines[index++].split(' ').map(Number)
        x= valores[0]
        y = valores[1]
        
        cont++

        if(y === 0){
            console.log('divisao impossivel')
            continue
        }

        quociente = x/y
        console.log(`${quociente.toFixed(1)}`)

    }

}

main()