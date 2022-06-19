import {input,print} from './io_utils.js'

function main(){
    //entrada
    const nome = input('Nome do funcionario: ')
    const salariofixo = Number(input('Salario fixo: '))
    const vendas = Number(input('vendas (em R$): '))
    
    //processamento
    const salario = salariofixo + vendas*0.15
    
    //saida
    print(`TOTAL = R$ ${salario.toFixed(2)}`)
    
}
main()