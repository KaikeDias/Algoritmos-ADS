import { input } from "./io_utils.js"

function main(){
    const inflacao = Number(input('Inflação: '))
    let salario_atual = Number(input('Salario: '))

    const salario_final = salario_atual + (salario_atual * inflacao / 100)

    console.log(`Salario alvo: ${salario_final}`)

    let aumento
    while(salario_atual < salario_final){
        aumento = aumentar_salario()
        salario_atual += aumento

        console.log(`Salario atual: ${salario_atual}`)
    }

    console.log(`Salario final: ${salario_atual}`)
}

function aumentar_salario(){
    let aumento = Number(input('Valor: '))

    while(!eh_cedula(aumento)){
        console.log('Digite um valor de cedulas de R$')
        aumento = Number(input('Valor: '))
    }

    return aumento
}

function eh_cedula(valor){
    if(valor === 2 || valor === 5 || valor === 10 || valor === 20 || valor === 50 || valor === 100 || valor === 200){
        return true
    }else{
        return false
    }
    
}

main()