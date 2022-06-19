import{input,print} from './io_utils.js'

function main(){
    //entrada
    const A = Number(input('Digite o valor de A: '))
    const B = Number(input('Digite o valor de B: '))
    const C = Number(input('Digite o valor de C: '))

    //processamento
    const R = (A+B)**2
    const S = (B+C)**2
    const D = (R+S)/2

    //saida
    print(`O valor de D é ${D}`)

}
main()