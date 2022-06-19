import {input,print} from './io_utils.js'

function main() {
    //entrada
    const n1 = Number(input('Digite o primeiro número: '))
    const n2 = Number(input('Digite o segundo número: '))
    //processamento
    const quociente = Math.trunc(n1/n2)
    const resto = n1 % n2
    
    //saida
    print(quociente)
    print(resto)
}
main()