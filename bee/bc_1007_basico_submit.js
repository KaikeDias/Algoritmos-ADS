import {input,print} from './io_utils.js'

function main(){
    //entrada
    const A = Number(input('A: '))
    const B = Number(input('B: '))
    const C = Number(input('C: '))
    const D = Number(input('D: '))
    
    //processamento
    const DIFERENCA = (A*B - C*D)
    
    //saida
    print(`DIFERENCA = ${DIFERENCA}`)
}
main()