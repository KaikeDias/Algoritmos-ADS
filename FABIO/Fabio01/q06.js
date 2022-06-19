import {input, print} from './io_utils.js'

function main(){
    // Entrada
    const velocidade_kmh = Number(input('Velocidade em km/h: '))

    // Processamento
    const velocidade_ms = velocidade_kmh / 3.6

    // Saída
    print(`O resultado é ${velocidade_ms} ms/s`)

}

main()