import{input,print} from './io_utils.js'

function main(){
    //entrada
    const valor = Number(input('Digite o valor do produto: '))

    //processamento
    const prestacao = Math.trunc(valor / 3)
    const entrada = valor - prestacao * 2

    //saida
    print(`Entrada: ${entrada}`)
    print(`Valor de cada prestação: ${prestacao}`)

}
main()