import{input,print} from './io_utils.js'

function main(){
    //entrada
    const lado = Number(input('Digite o valor do lado do quadrado: '))

    //processamento
    const area = lado**2

    //saida
    print(`A area do quadrado equivale a ${area} m2`)

}
main()