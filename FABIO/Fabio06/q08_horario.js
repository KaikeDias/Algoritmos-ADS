import {input} from './io_utils.js'

function main(){
    const horario = input('Horario (hh:mm:ss): ').split(':').map(Number)
    const horas = horario[0]
    const minutos = horario[1]
    const segundos = horario[2]

    console.log(`${horas} hora(s), ${minutos} minuto(s) e ${segundos} segundo(s)`)
}

main()