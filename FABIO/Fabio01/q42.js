import{input,print} from './io_utils.js'

function main(){
    //entrada
    const x1 = Number(input('Digite o valor de x1: '))
    const y1 = Number(input('Digite o valor de y1: '))

    const x2 = Number(input('Digite o valor de x2: '))
    const y2 = Number(input('Digite o valor de y2: '))
    
    //processamento
    const distancia = Math.sqrt((x2-x1)**2 + (y2-y1)**2)

    print(`A distancia entre os pontos é ${distancia.toFixed(2)}`)

}
main()