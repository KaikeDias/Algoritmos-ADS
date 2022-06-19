import {input,print} from './io_utils.js'

function main(){
    //entrada
    const X = Number(input('X: '))
    const Y = Number(input('Y: '))
    
    //processamento
    const consumo = X / Y
    
    //saida
    print(`${consumo.toFixed(3)} km/l`)
    
}
main()