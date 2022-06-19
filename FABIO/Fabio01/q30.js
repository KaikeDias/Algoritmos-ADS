import{input,print} from './io_utils.js'

function main(){
    //entrada
    const minutos = Number(input('Digite o numero de minutos: '))

    //processamento
    const horas = Math.trunc(minutos / 60)
    const dias = Math.trunc(horas / 24)

    //saida
    print(`${minutos} são equivalentes a ${horas} horas e  ${dias} dias`)


}
main()