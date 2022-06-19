//Estou arrendondando para 30 o numero de dias no mes

import {input} from './io_utils.js'

function main(){
    //entrada
    const data_nascimento = input('Digite a data de nascimento (XX/XX/XXXX): ')
    const numeros = data_nascimento.split('/').map(Number)
    const dia_nascimento = numeros[0]
    const mes_nascimento = numeros[1]
    const ano_nascimento = numeros[2]
    
    const data_atual = input('Digite a data atual (XX/XX/XXXX): ')
    const numeros2 = data_atual.split('/').map(Number)
    const dia_atual = numeros2[0]
    const mes_atual = numeros2[1]
    const ano_atual = numeros2[2]

    //saida
    console.log(`${idade(ano_atual,ano_nascimento,dia_nascimento,dia_atual,mes_atual,mes_nascimento)} anos`)

}

function idade(ano_atual,ano_nascimento,dia_nascimento,dia_atual,mes_atual,mes_nascimento){
    let age = 0
    if (ano_nascimento > ano_atual){
        console.log('Ano de nascimento invalido')
    }else if(mes_nascimento > 12 || mes_atual > 12){
        console.log('Mes invalido')
    }else if(dia_nascimento > 30 || dia_atual > 30){
        console.log('Dia invalido')
    }else{
        age = ano_atual - ano_nascimento

        if (mes_atual < mes_nascimento){
            age = age - 1
        }else if (dia_atual < dia_nascimento){
            age = age - 1 
        }
    
    }
    return age
}

main()