import {input} from '../io_utils.js'

function main(){
    //entrada
    const salario = Number(input('Salario: '))
    let imposto = 0
    let diferenca = 0

    //processamento
    if (salario > 4500){
        imposto = 1000 * 0.08 + 1500 * 0.18 
        diferenca = salario - 4500
        imposto = imposto + diferenca * 0.28
        console.log(`R$ ${imposto.toFixed(2)}`)
    }else if(salario > 3000){
        imposto = 1000 * 0.08
        diferenca = salario - 3000
        imposto = imposto + diferenca * 0.18
        console.log(`R$ ${imposto.toFixed(2)}`)
    }else if(salario > 2000){
        diferenca = salario - 2000
        imposto = diferenca * 0.08
        console.log(`R$ ${imposto.toFixed(2)}`)
    }else if(salario > 0){
        console.log('Isento')
    }




}
main()