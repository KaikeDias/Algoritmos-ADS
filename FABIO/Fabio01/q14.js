import{input,print} from './io_utils.js'

function main(){
    //entrada
    const nota1 = Number(input('Digite a primeira nota: '))
    const nota2 = Number(input('Digite a segunda nota: '))
    const nota3 = Number(input('Digite a terceira nota: '))

    //processamento
    const media_ponderada = (nota1 * 3 + nota2 * 3 + nota3 * 4) / 10

    //saida
    print(`A media das 3 notas é ${media_ponderada.toFixed(2)}`)

}
main()