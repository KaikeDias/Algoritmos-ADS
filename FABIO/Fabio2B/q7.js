import {input} from './io_utils.js'

function main(){
    //Entrada    
    const salario_atual = Number(input('Informe o salario do funcionario: R$'))

    //Processamento
    let salario_novo = 0 
    let percentual = 0
    let valor_aumento = 0

    if (salario_atual <= 280){
        valor_aumento = (salario_atual * 20/100)
        salario_novo = salario_atual + valor_aumento
        percentual = '20%'
    }else if(salario_atual > 280 && salario_atual <= 700){
        valor_aumento = (salario_atual * 15/100)
        salario_novo = salario_atual + valor_aumento
        percentual = '15%'
    }else if(salario_atual > 700 && salario_atual <= 1500){
        valor_aumento = (salario_atual * 10/100)
        salario_novo = salario_atual + valor_aumento
        percentual = '10%'
    }else if(salario_atual > 1500){
        valor_aumento = (salario_atual * 5/100)
        salario_novo = salario_atual + valor_aumento
        percentual = '5%'
    }

    //Saída
    console.log(`Salario antes do reajuste:  R$${salario_atual}`)
    console.log(`Percentual aplicado: ${percentual}`)
    console.log(`Valor do aumento: R$${valor_aumento}`)
    console.log(`Salario novo: R$${salario_novo}`)

}


main()