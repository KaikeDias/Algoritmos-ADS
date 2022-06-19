import{input,print} from './io_utils.js'

function main(){
    //entrada
    const base = Number(input('Digite o valor da base: '))
    const altura = Number(input('Digite o valor da altura: '))

    //processamento
    const area = base * altura

    //saida
    print(`A area do retangulo é ${area} m2`)
}
main()