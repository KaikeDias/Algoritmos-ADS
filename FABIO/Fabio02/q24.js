import {input} from './io_utils.js'

function main(){
    //entrada
    const A = Number(input('A: '))
    const B = Number(input('B: '))
    const C = Number(input('C: '))

    //processamento
    if (A !== 0){
        console.log(`raiz 1: ${raiz1(A,B,C)}`)
        console.log(`raiz 2: ${raiz2(A,B,C)}`)
    }else{
        console.log('Invalido')
    }

}

function delta(A,B,C){
    const delta = (B * B - 4*A*C)/100
    return delta
}

function raiz1(A,B,C){
    const raiz1 = ((B * -1) + Math.sqrt(delta(A,B,C))) / 2 * A
    return raiz1
}

function raiz2(A,B,C){
    const raiz2 = ((B * -1) - Math.sqrt(delta(A,B,C))) / 2 * A
    return raiz2
}

main()