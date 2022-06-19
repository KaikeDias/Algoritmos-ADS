import {input} from './io_utils.js'

function main(){
    const N = Number(input('N: '))

    calculo(N)

}

function calculo(n){
    let S = 0
    for(let cont = 1; cont <= n;cont++){
        S += 1/cont
    }
    console.log(S.toFixed(3))
}

main()