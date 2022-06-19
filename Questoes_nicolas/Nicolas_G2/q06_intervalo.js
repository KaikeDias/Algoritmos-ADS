import {input} from './io_utils.js'

function main(){
    //Primeiro instante
    const data1 = input('Data dd/MM/aaaa: ')
    const horario1 = input('Horario hh:mm:ss: ')
    //Segundo instante
    const data2= input('Data dd/MM/aaaa: ')
    const horario2 = input('Horario hh:mm:ss: ')

    const [instante_inicial, instante_final] = ordenar(data1,horario1,data2,horario2)
    
    const [data_inicial,horario_inicial] = instante_inicial
    const [data_final,horario_final] = instante_final

    const [dia1,mes1,ano1] = data_inicial.split('/').map(Number)
    const [hora1,minuto1,segundo1] = horario_inicial.split(':').map(Number)
    const [dia2,mes2,ano2] = data_final.split('/').map(Number)
    const [hora2,minuto2,segundo2] = horario_final.split(':').map(Number)
    

    const anos = intervalo_anos(ano1,ano2,dia1,dia2,mes1,mes2)
    const meses = intevalo_meses(mes1,mes2)
    const dias = intevalo_dias(dia1,dia2)
    const horas = intervalo_horas(hora1,hora2,minuto1,minuto2)
    const minutos = intervalo_minutos(minuto1,minuto2)
    const segundos = intervalo_segundos(segundo1,segundo2)  

    console.log(`${anos} anos ${meses} meses ${dias} dias ${horas} horas ${minutos} minutos e ${segundos} segundos`)
}

function ordenar(data1,horario1,data2,horario2){
    const [dia1,mes1,ano1] = data1.split('/').map(Number)
    const [hora1,minuto1,segundo1] = horario1.split(':').map(Number)
    const [dia2,mes2,ano2] = data2.split('/').map(Number)
    const [hora2,minuto2,segundo2] = horario2.split(':').map(Number)

    let instante_inicial
    let instante_final

    if(ano1 > ano2){
        instante_inicial = [data2,horario2]
        instante_final = [data1,horario1]
    }else if(ano2 > ano1){
        instante_inicial = [data1,horario1]
        instante_final = [data2,horario2]
    }else{
        if(mes1 > mes2){
            instante_inicial = [data2,horario2]
            instante_final = [data1,horario1]
        }else if(mes2 > mes1){
            instante_inicial = [data1,horario1]
            instante_final = [data2,horario2]
        }else{
            if(dia1 > dia2){
                instante_inicial = [data2,horario2]
                instante_final = [data1,horario1]
            }else if(dia2 > dia1){
                instante_inicial = [data1,horario1]
                instante_final = [data2,horario2]
            }else{
                if(hora1 > hora2){
                    instante_inicial = [data2,horario2]
                    instante_final = [data1,horario1]
                }else if(hora2 > hora1){
                    instante_inicial = [data1,horario1]
                    instante_final = [data2,horario2]
                }else{
                    if(minuto1 > minuto2){
                        instante_inicial = [data2,horario2]
                        instante_final = [data1,horario1]
                    }else if(minuto2 > minuto1){
                        instante_inicial = [data1,horario1]
                        instante_final = [data2,horario2]
                    }else{
                        if(segundo1 > segundo2){
                            instante_inicial = [data2,horario2]
                            instante_final = [data1,horario1]
                        }else{
                            instante_inicial = [data2,horario2]
                            instante_final = [data1,horario1]
                        }
                    }
                }
            }
        }
    }

    return [instante_inicial,instante_final]
}


function intervalo_anos(ano1,ano2,mes1,mes2,dia1,dia2){
    let age = ano2 - ano1

    if (mes2 < mes1){
        age = age--
    }else if(mes1 === mes2 && dia1 > dia2){
        age--
    }
   
    return age
}

function intevalo_meses(mes1,mes2){
    let mes_total = 0

    if(mes2>mes1){
        mes_total = mes2 - mes1
    }else if(mes2<mes1){
        mes_total = (mes2 + 12) - mes1
    }
    return mes_total
}

function intevalo_dias(dia1,dia2){
    let dia_total = 0
    if(dia2>dia1){
        dia_total = dia2 - dia1
    }else if(dia2<dia1){
        dia_total = (dia2 + 30) - dia1
    }
    return dia_total

}

function intervalo_horas(hora1,hora2,minuto1,minuto2){
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

function intervalo_minutos(minuto1,minuto2,segundo1,segundo2){
    let minuto_total = 0

    if(minuto2 >= minuto1){
        minuto_total = minuto2 - minuto1
    }else{
        minuto_total = (minuto2 + 60) - minuto1
    }

    if(segundo1 > segundo2){
        minuto_total--
    }

    return minuto_total
}

function intervalo_segundos(segundo1,segundo2){
    let segundo_total = 0

    if(segundo2 >= segundo1){
        segundo_total = segundo2 - segundo1
    }else{
        segundo_total = (segundo2 + 60) - segundo1
    }

    return segundo_total
}

main()