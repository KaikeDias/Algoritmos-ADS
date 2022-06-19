import{input,print} from './io_utils.js'

function main(){
    //entrada
    const numerador1 = Number(input('Digite o primeiro numerador: '))
    const denominador1 = Number(input('Digite o primerio denominador: '))
    const numerador2 = Number(input('Digite o segundo numerador: '))
    const denominador2 = Number(input('Digite o segundo denominador: '))

    //processamento
    const numerador_total = (denominador1 * numerador2) + (denominador2*numerador1)
    const denominador_total = denominador1 * denominador2

    //saida
    print(`${numerador_total} / ${denominador_total}`)
}
main()