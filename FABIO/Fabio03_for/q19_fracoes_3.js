import {input} from './io_utils.js'

function main(){

    const N = Number(input('N: '))
    let num = N
    let S = 0

    for(let cont = 1; cont <= N; cont++){
        if(!eh_par(cont)){
            S += cont/num
        }else{
            S -= num/cont
        }
        
        num--
    }

    console.log(S.toFixed(2))
} 

function eh_par(cont){
    if(cont % 2 === 0){
        return true
    }
}

main()