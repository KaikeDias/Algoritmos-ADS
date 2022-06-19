import {input,print} from './io_utils.js'

function main() {
    //entrada
    const numero = Number(input('numero do funcionario: '))
    const horas = Number(input('Horas trabalhadas: '))
    const valorHora = Number(input('Salario por hora: '))
    
    //processamento
    const salario = valorHora * horas
    
    //saida
    print(`NUMBER = ${numero}`)
    print(`SALARY = U$ ${salario.toFixed(2)}`)
}
main()