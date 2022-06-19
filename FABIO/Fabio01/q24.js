import{input,print} from './io_utils.js'

function main(){
    //entrada
    const metros = Number(input('Digite a distancia em m: '))

    //processamento
    const cm = metros * 100

    //saida
    print(`O equivalente de ${metros}m em centímetros é ${cm}cm`)

}
main()