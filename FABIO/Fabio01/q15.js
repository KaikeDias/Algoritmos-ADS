import{input,print} from './io_utils.js'

function main(){
    //entrada
    const base = Number(input('Digite o valor da base: '))
    const altura = Number(input('Digite o valor da altura: '))

    //processamento
    const area = (base*altura)/2

    //saida
    print(`A area do triangulo é ${area} m2`)
}
main()