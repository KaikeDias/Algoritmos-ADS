import {input} from './io_utils.js'

function main(){
    const N = Number(input('N: '))

    calculo(N)

}

function calculo(n){
    let num = 1
    let S = num/n
    for(let cont = 1; cont < n ; cont++){
        num++
       S += num/(n-cont)
        
    }
    console.log(S)
}

main()