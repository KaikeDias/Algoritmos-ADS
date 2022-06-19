import {input} from './io_utils.js'

function main(){
    //entrada
    const A = Number(input('A: '))
    const B = Number(input('B: '))

    //saida
    console.log(`Maior: ${maior(A,B)}`)
    console.log(`Menor: ${menor(A,B)}`)

}

function maior(n1,n2){
    if (n1 > n2){
        return n1
    }else if(n2 > n1){
        return n2
    }
}

function menor(x1,x2){
    if (x1 < x2){
        return x1
    }else if(x2 < x1){
        return x2
    }
}

main()