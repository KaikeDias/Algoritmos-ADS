import{input,print} from './io_utils.js'

function main(){
    //entrada
    const dias = Number(input('Digite o numero de dias: ')) 

    //processamento
    const semanas = Math.trunc(dias / 7)
    const dias2 = dias % 7

    //saída
    print(`${dias} dias são equivalentes a ${semanas} semanas e ${dias2} dias`)
}
main()