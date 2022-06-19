import {input} from './io_utils.js'

function main(){
    const momento_inicio = input('digite o horario de inicio (hh:mm): ').split(':').map(Number)
    const hora1 = momento_inicio[0]
    const minuto1 = momento_inicio[1]

    const momento_final = input('digite o horario de encerramento (hh:mm): ').split(':').map(Number)
    const hora2 = momento_final[0]
    const minuto2 = momento_final[1]

    if(hora_valida(hora1,hora2) && minuto_valido(minuto1,minuto2)){
        console.log(`O intervalo sera de ${horas(hora1,hora2,minuto1,minuto2)} hora(s) e ${minutos(minuto1,minuto2)} minuto(s)`)
    }else{
        console.log('Os valores que você digitou são inválidos')
    }
}

function hora_valida(hora1,hora2){
    if(hora1 <= 23 && hora2 <= 23){
        return true
    }else{
        return false
    }
}

function minuto_valido(minuto1,minuto2){
    if(minuto1 <= 60 && minuto2 <= 60){
        return true
    }else{
        return false
    }
}

function horas(hora1,hora2,minuto1,minuto2){
    let hora_total = 0

    if(hora1 <= hora2){
        hora_total = hora2 - hora1
    }else{
        hora_total = (hora2 + 24) - hora1
    }

    if(minuto1 > minuto2){
        hora_total--
    }
    
    return hora_total
}

function minutos(minuto1,minuto2){
    let minuto_total = 0

    if(minuto2 >= minuto1){
        minuto_total = minuto2 - minuto1
    }else{
        minuto_total = (minuto2 + 60) - minuto1
    }

    return minuto_total
}

main()