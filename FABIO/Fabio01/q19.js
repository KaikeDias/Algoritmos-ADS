import{input,print} from './io_utils.js'

function main(){
    //entrada
    const raio = Number(input('Digite o raio da esfera: '))
    const pi = 3.14

    //processamento
    const volume = (4 * pi * raio ** 3) / 3

    //saida
    print(`O volume da esfera é ${volume.toFixed(2)}`)
}
main()