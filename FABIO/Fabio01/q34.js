import {input,print} from './io_utils.js'

function main(){
    //entrada
    const n1 = Number(input('Digite o primeiro número: '))
    const n2 = Number(input('Digite o segundo número: '))
    const n3 = Number(input('Digite o terceiro número: '))
    
    //processamento
    const media = (n1+n2+n3)/3

    //saida
    print(`A media é ${media.toFixed(2)}`)

}
main()