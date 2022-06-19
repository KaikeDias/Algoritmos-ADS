import {input} from './io_utils.js'

function main(){
    const N = Number(input('N: '))

    contagem(N)
}   

function contagem(N){
    let cont = 1

    while(cont <= N){
        if(eh_par(cont)){
            console.log(cont)
        }
        cont++
    }

}

function eh_par(N){
    if(N % 2 === 0){
        return true
    }

}

main()