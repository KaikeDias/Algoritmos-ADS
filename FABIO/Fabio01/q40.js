import{input,print} from './io_utils.js'

function main(){
    //entrada
    const anos = Number(input('A quantos anos ele fuma? '))
    const cigarros_por_dia = Number(input('Quantos cigarros ele fuma por dia? '))
    const preço = Number(input('Qual o preço de uma carteira de cigarros? '))

    //processamento
    const dias = anos * 365
    const ncigarros = dias * cigarros_por_dia
    const valor_gasto = Math.trunc(ncigarros/20) * preço
    
    //saida
    print(`O valor total gasto em cigarros foi ${valor_gasto}`)


}
main()