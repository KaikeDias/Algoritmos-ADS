import{input,print} from './io_utils.js'

function main(){
    //entrada
    const raio = Number(input('Digite o raio da circunferência: '))
    const pi = Math.PI

    //processamento
    const comprimento = 2 * pi * raio

    //saida
    print(`O comprimento da circunferencia é ${comprimento.toFixed(2)}`)
}
main()