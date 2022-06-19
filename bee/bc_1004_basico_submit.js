import {input,print} from './io_utils.js'

function main(){
    //entrada
    const n1 = Number(input('n1: '))
    const n2 = Number(input('n2: '))
    
    //processamento
    const PROD = n1 * n2
    
    //saida
    print(`PROD = ${PROD}`)
}
main()