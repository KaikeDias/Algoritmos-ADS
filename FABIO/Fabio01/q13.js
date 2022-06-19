import{input,print} from './io_utils.js'

function main(){
    //entrada
    const valor = Number(input('Digite um valor em real: R$'))

    //processamento
    const valor70 = valor * 0.70

    //saida
    print(`70% de R$${valor} é R$${valor70}`) 

}
main()