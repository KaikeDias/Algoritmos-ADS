import{input,print} from './io_utils.js'

function main(){
    //entrada
    const meses = Number(input('Digite o numero de meses: '))

    //processamento
    const anos = Math.trunc(meses/12)
    const meses2 = meses % 12

    //saida
    print(`${meses} meses sao equivalentes a  ${anos} anos e ${meses2} meses`)

}
main()