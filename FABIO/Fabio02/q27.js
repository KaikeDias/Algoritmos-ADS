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
    console.log(`${idade_anos(ano_atual,ano_nascimento,dia_nascimento,dia_atual,mes_atual,mes_nascimento)} anos ${idade_meses(mes_atual,mes_nascimento)} meses e ${idade_dias(dia_atual,dia_nascimento)} dias`)

}

function idade_anos(ano_atual,ano_nascimento,dia_nascimento,dia_atual,mes_atual,mes_nascimento){
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

function idade_meses(mes_atual,mes_nascimento){
    let mes_total = 0

    if(mes_atual>mes_nascimento){
        mes_total = mes_atual - mes_nascimento
    }else if(mes_atual<mes_nascimento){
        mes_total = (mes_atual + 12) - mes_nascimento
    }
    return mes_total
}

function idade_dias(dia_atual,dia_nascimento){
    let dia_total = 0
    if(dia_atual>dia_nascimento){
        dia_total = dia_atual - dia_nascimento
    }else if(dia_atual<dia_nascimento){
        dia_total = (dia_atual + 30) - dia_nascimento
    }
    return dia_total

}

main()