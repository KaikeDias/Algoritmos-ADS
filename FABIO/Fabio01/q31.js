import {input,print} from './io_utils.js'

function main() {
    //entrada
    const binario = Number(input('Escreva um numero inteiro binario de 4 digitos: '))
    
    //processamento
    const decimal = parseInt(binario, 2)

    //saida
    print(`${binario} em decimal é ${decimal}`)
}
main()