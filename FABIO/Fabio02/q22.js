import {input} from './io_utils.js'

function main(){
    //entrada
    const hora_inicial = Number(input('Hora incial: '))
    const minuto_inicial = Number(input('Minuto inicial: '))
    const hora_final = Number(input('Hora final: '))
    const minuto_final = Number(input('Minuto final: '))
    
    console.log(`A duração do jogo foi de ${hora(hora_inicial,minuto_inicial,hora_final,minuto_final)} horas e ${minuto(hora_inicial,minuto_inicial,hora_final,minuto_final)} minutos`)
}

function valido(hora_inicial,minuto_inicial,hora_final,minuto_final){
    if (hora_inicial > 23){
        return false
    }else if(hora_inicial <= 23){
        return true
    }else if(minuto_inicial > 59){
        return false
    }else if(minuto_inicial <= 59){
        return true

    }else if(hora_final > 23){
        return false
    }else if(hora_final <= 23){
        return true

    }else if(minuto_final > 59){
        return false
    }else if(minuto_final <= 59){
        return true
    }
}



function hora(hora_inicial,minuto_inicial,hora_final,minuto_final){
    let hora_total = 0
    if(valido(hora_inicial,minuto_inicial,hora_final,minuto_final)){
        if (hora_inicial < hora_final){
            hora_total = hora_final - hora_inicial
    
        }else if(hora_inicial > hora_final){
            hora_total = (hora_final+24) - hora_inicial
    
        }
        if (minuto_inicial > minuto_final){
            hora_total = hora_total - 1
        }
    }
    return hora_total
}

function minuto(hora_inicial,minuto_inicial,hora_final,minuto_final){
    let minuto_total = 0

    if (valido(hora_inicial,minuto_inicial,hora_final,minuto_final)){
        if (minuto_final>minuto_inicial){
            minuto_total = minuto_final - minuto_inicial
        }else if(minuto_final < minuto_inicial){
            minuto_total = (minuto_final + 60) - minuto_inicial
        }
    }
    return minuto_total
}


main()