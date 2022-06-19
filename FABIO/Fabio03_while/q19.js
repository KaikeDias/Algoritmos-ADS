import {input} from './io_utils.js'

function main(){

    const N = Number(input('N: '))
    let num = N
    let cont = 1
    let S = 0

    while(cont <= N){
        if(!eh_par(cont)){
            S += cont/num
        }else{
            S -= num/cont
        }
        
        num--
        cont++
    }

    console.log(S.toFixed(2))
} 

function eh_par(cont){
    if(cont % 2 === 0){
        return true
    }
}

main()