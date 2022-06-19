import {input,print} from './io_utils.js'

function main(){
    //entrada
    const n1 = Number(input('Digite o primeiro número: '))
    const n2 = Number(input('Digite o segundo número: '))
    const n3 = Number(input('Digite o terceiro número: '))
    
    //processamento
    const soma = n1 + n2
    const subtração = n2 - n3

    //saida
    print(`${soma}`)
    print(`${subtração}`)

}
main()