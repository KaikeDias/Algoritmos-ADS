import {input} from './io_utils.js'

function main(){
    //Entrada
    const horas_aula = Number(input('Quantas horas de aula foram dadas: '))
    const prof_A = Number(input('Quanto o professor A ganha por hora: '))
    const prof_B = Number(input('Quanto o professor B ganha por hora: '))

    //saida
    if (salario_A(prof_A,horas_aula) > salario_B(prof_B,horas_aula)){
        console.log('O professor A ganha mais')
    }else if(salario_B(prof_B,horas_aula) > salario_A(prof_A,horas_aula)){
        console.log('O professor B ganha mais')
    }else{
        console.log('Os dois professores possuem salarios identicos')
    }

}

function salario_A(PA,HA){
    const salario = PA * HA

    return salario
}

function salario_B(PB,HA){
    const salariob = PB * HA

    return salariob
}




main()