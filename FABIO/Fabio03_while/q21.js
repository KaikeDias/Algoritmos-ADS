import {input} from './io_utils.js'

function main(){
    let S = 0
    let dividendo = 1
    let divisor = 1

    while(dividendo < 99){
        S += dividendo/divisor
        divisor++
        dividendo+=2
    }

    console.log(S.toFixed(2))

}

main()