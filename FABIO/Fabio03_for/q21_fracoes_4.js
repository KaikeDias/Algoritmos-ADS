import {input} from './io_utils.js'

function main(){
    let divisor = 1
    let S = 0

    for(let dividendo = 1; dividendo < 99;dividendo+=2){
        S += dividendo/divisor
        divisor++
    }

    console.log(S.toFixed(2))

}

main()