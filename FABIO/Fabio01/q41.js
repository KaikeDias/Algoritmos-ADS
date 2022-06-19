import{input,print} from './io_utils.js'

function main(){
    //entrada
    const preço_fabrica = Number(input('Digite o valor de fábrica veiculo: '))

    //processamento
    const preço = preço_fabrica * 1.73

    //saida
    print(`O carro custará R$${preço}`)

}
main()