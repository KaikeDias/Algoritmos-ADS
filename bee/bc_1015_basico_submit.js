import {input,print} from './io_utils.js'

function main(){ 
    //entrada
    const x1 = Number(input('x1: '))
    const y1 = Number(input('y1: '))
    
    const x2 = Number(input('x2: '))
    const y2 = Number(input('y2: '))
    
    //processamento
    const distancia = Math.sqrt(((x2-x1) * (x2-x1)) + ((y2-y1) * (y2-y1)))   
    
    //saida
    print(`${distancia.toFixed(4)}`)
}
main()
