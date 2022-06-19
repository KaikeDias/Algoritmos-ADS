import{input,print} from './io_utils.js'

function main(){
    //entrada
    const salario = Number(input('Digite o salario do funcionario: R$'))

    //processamento
    const salario_novo = salario * 1.25

    //saida
    print(`O novo salário do funcionário com um aumento de 25% será R$${salario_novo}`)

}
main()