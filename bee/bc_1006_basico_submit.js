import {input,print} from './io_utils.js'

function main(){
    //entrada
    const A = Number(input('A: '))
    const B = Number(input('B: '))
    const C = Number(input('C: '))
    
    //processamento
    const MEDIA = (A*2 + B*3 + C*5)/10
    
    //saida
    print(`MEDIA = ${MEDIA.toFixed(1)}`)
}
main()
