import {input,print} from './io_utils.js'

function main(){
    //entrada
    const distancia = Number(input('distancia: '))
    
    //processamento
    const tempo = distancia * 2
    
    //saida
    print(`${tempo} minutos`)
}
main()