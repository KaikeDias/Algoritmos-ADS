import{input,print} from './io_utils.js'

function main(){
    //entrada
    const horas = Number(input('Digite o numero de horas: '))

    //processamento
    const dias = Math.trunc(horas / 24)
    const semanas = Math.trunc(dias / 7)

    //saída
    print(`${horas} horas são equivalentes a ${dias} dias e ${semanas} semanas`)

}
main()