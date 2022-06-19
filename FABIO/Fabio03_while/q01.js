import {input} from './io_utils.js'

function main(){
    const N = Number(input('N: '))

    contagem(N)
}   

function contagem(N){
    let cont = 1

    while(cont <= N){
        console.log(cont)
        cont++
    }

}

main()