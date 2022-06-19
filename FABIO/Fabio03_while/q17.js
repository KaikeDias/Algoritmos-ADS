import {input} from './io_utils.js'

function main(){
    const N = Number(input('N: '))

    calculo(N)

}

function calculo(n){
    let cont = 1
    let S = 0
    while(cont <= n){
        S += 1/cont
        cont++
    }
    console.log(S.toFixed(3))
}

main()