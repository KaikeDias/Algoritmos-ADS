import {input} from './io_utils.js'

function main(){
    const[maior, menor] = ordenar(lines)

    let soma = 0
    let num = menor
    while(num <= maior){
        if(num % 13 !== 0){
            soma += num
            num++
        }
        num++
    }

    console.log(soma)
}

function ordenar([n1,n2]) {

    if(n1>n2) {
        return [n1,n2]
    } else {
        return [n2,n1]
    }
}

main()