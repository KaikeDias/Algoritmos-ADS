import {input,print} from './io_utils.js'

function main(){
    //entrada
    const tempo = Number(input('tempo: '))
    const velocidade_media = Number(input('velocidade media: '))
    
    //processamento
    const distancia = velocidade_media*tempo
    const consumo = distancia/12
    
    //saida
    print(`${consumo.toFixed(3)}`)
    
}
main()