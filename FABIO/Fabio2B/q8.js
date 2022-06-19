import {input} from './io_utils.js'

function main(){
    //Entrada
    const valor_hora = Number(input('Quanto ganha por hora: '))
    const horas = Number(input('Horas trabalhadas: '))

    const salario_bruto = valor_hora * horas

    //Saída
    console.log(`salario bruto: R$${salario_bruto}`)
    console.log(`Imposto de renda: R$${IR_CAlCULO(salario_bruto)}`)
    console.log(`INSS: R$${INSS(salario_bruto)}`)
    console.log(`FGTS: R$${FGTS(salario_bruto)}`)
    console.log(`Total de descontos: R$${descontos(salario_bruto)}`)
    console.log(`Salario liquido: R$${liquido(salario_bruto)}`)

}

//Processamento
function IR(salario_bruto){
    let imposto_renda = 0
    if(salario_bruto <= 900){
        imposto_renda = 0
    }else if(salario_bruto > 900 && salario_bruto <= 1500){
        imposto_renda = 5
    }else if(salario_bruto > 1500 && salario_bruto <= 2500){
        imposto_renda = 10
    }else if(salario_bruto > 2500){
        imposto_renda = 20
    }
    return imposto_renda
}

function IR_CAlCULO(salario_bruto){
    const calculo = IR(salario_bruto)/100 * salario_bruto
    return calculo
}

function INSS(salario_bruto){
    return salario_bruto * 10/100
}

function FGTS(salario_bruto){
    return salario_bruto * 11/100
}

function descontos(salario_bruto){
    const total = IR_CAlCULO(salario_bruto) + INSS(salario_bruto) 
    return total
}

function liquido(salario_bruto){
    return salario_bruto - descontos(salario_bruto)
}

main()