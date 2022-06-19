import {input,print} from './io_utils.js'

function main() {
    //entrada
    const n1 = Number(input('Digite o primeiro número: '))
    const n2 = Number(input('Digite o segundo número: '))

    //processamento
    const soma = n1 + n2
    const subtraçao = n1 - n2
    const divisao = soma / subtraçao

    
    //saida
    print(`${soma}`)
    print(`${subtraçao}`)
    print(`${divisao}`)
                        

}
main()