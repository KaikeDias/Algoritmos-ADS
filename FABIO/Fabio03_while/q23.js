import {input} from './io_utils.js'

function main(){
    const funcionarios = Number(input('Numero de funcionarios: '))
    let codigo = 0
    let horas = 0
    let dependentes = 0
    let cont = 0
    while(cont < funcionarios){
        codigo = Number(input('Codigo do funcionario: '))
        horas = Number(input('Horas trabalhadas: '))
        dependentes = Number(input('Numero de dependentes: '))
        
        console.log(`Funcionario: ${codigo}`)
        console.log(`INSS: ${INSS(horas,dependentes).toFixed(2)}`)
        console.log(`Imposto de renda: ${IR(horas,dependentes).toFixed(2)}`)
        console.log(`Salario liquido: ${salario_liquido(horas,dependentes).toFixed(2)}`)
        cont++
    }


}

function salario_inicio(horas,dependentes){
    const salario_inicial = horas * 12 + dependentes * 40
    return salario_inicial
}

function INSS(horas,dependentes){
    const desconto = salario_inicio(horas,dependentes) * 0.085
    return desconto
}

function IR(horas,dependentes){
    const desconto = salario_inicio(horas,dependentes) * 0.05
    return desconto
}

function salario_liquido(horas,dependentes){
    const salario_inicial = salario_inicio(horas,dependentes) 
    const imposto1 = INSS(horas,dependentes)
    const imposto2 = IR(horas,dependentes)
    const salario = salario_inicial - imposto1 - imposto2
    return salario
}

main()