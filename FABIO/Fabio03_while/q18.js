import {input} from './io_utils.js'

function main(){
    const N = Number(input('N: '))

    calculo(N)

}

function calculo(n){
    let cont = 1
    let num = 1
    let S = num/n
    while(cont < n){
        num++
        S += num/(n-cont)
        cont++
        
    }
    console.log(S)
}

main()