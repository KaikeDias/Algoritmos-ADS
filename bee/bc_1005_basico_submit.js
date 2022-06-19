import {input,print} from './io_utils.js'

function main(){
    //entrada
    const A = Number(input('A: '))
    const B = Number(input('B: '))
    
    //processamento
    const MEDIA = (A*3.5 + B*7.5)/11
    
    //saida
    print(`MEDIA = ${MEDIA.toFixed(5)}`)
}
main()