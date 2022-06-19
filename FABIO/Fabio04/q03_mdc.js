import {input} from './io_utils.js'

function main(){
    const A = Number(input('A: '))
    const B = Number(input('B: '))

    let maior 
    if(A > B){
        maior = A
    }else{
        maior = B
    }

    let mdc = maior
    
    while(!eh_divisor(A,mdc) || !eh_divisor(B,mdc)){
        mdc--
    }

    console.log(`MDC: ${mdc}`)

}

function eh_divisor(num,mdc){
    if(num === 0){
        return true
    }else if(num % mdc === 0){
        return true
    }else{
        return false
    }
}

main()