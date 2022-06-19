import {input} from './io_utils.js'

function main(){
    let salario_atual = 1
    let novo_salario
    let soma_atuais = 0
    let soma_reajustados = 0
    while(salario_atual !== 0){
        salario_atual = Number(input('Salario atual: '))
        novo_salario = salario_atual + acrecimo(salario_atual)
        soma_atuais += salario_atual
        soma_reajustados += novo_salario
    }

    const diferenca = soma_reajustados - soma_atuais

    console.log(`Soma dos salarios atuais: ${soma_atuais}`)
    console.log(`Soma dos salarios reajustados: ${soma_reajustados}`)
    console.log(`Diferença entre os salarios: ${diferenca}`)
    
}

function acrecimo(salario_atual){
    if(salario_atual < 3000){
        return salario_atual * 0.25
    }else if(salario_atual >= 3000 && salario_atual < 6000){
        return salario_atual * 0.20
    }else if(salario_atual >= 6000 && salario_atual < 10000){
        return salario_atual * 0.15
    }else{
        return salario_atual * 0.10
    }

}

main()