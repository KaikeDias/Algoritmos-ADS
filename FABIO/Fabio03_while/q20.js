import {input} from './io_utils.js'

function main(){
    const N = Number(input('N: '))

    let cont = 1
    let S = 0

    while (cont <= N){
        if(!eh_par(cont)){
            S += 1/cont
        }else{
            S -= 1/cont
        }

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