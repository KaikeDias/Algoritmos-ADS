import {input,print} from './io_utils.js'

function main(){
    //entrada
    const raio = Number(input('raio: '))
    const pi = 3.14159
    
    //processamento
    const volume = (4.0/3) * pi * raio**3 
    
    //saida
    print(`VOLUME = ${volume.toFixed(3)}`)
}
main()