import {input,print} from './io_utils.js'

function main(){
    //entrada
    const raio = Number(input('raio: '))
    const pi = 3.14159
    
    //processamento
    const area = pi * (raio * raio)
    
    //saida
    print(`A=${area.toFixed(4)}`)
}
main()