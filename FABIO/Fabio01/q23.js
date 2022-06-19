import{input,print} from './io_utils.js'

function main(){
    //entrada
    const kg = Number(input('Digite a massa em kg: '))

    //processamento
    const gramas = kg * 1000

    //saida
    print(`${kg} equivale a ${gramas} gramas`)

}
main()