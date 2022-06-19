import {input} from './io_utils.js'

function main(){
    const N = Number(input('N: '))

    let cont = 1
    let maior = 0

    while(cont <= N){
        if(eh_quadrado(cont)){
            if(cont > maior){
                maior = cont
            }
        }
        cont++
    }
   
    console.log(`Maior quadrado: ${maior}`)

}

function eh_quadrado(cont){
    if(Math.sqrt(cont) % 1 === 0){
        return true
    }

}

main()