import {input,print} from './io_utils.js'

function main(){
    //entrada
    const segundos = Number(input('segundos: '))

    //processamento
    const horas = Math.trunc(segundos/3600)
    const resto = segundos % 3600
    const minutos = Math.trunc(resto/60)
    const segundos2 = resto % 60

    //saida
    print(`${horas}:${minutos}:${segundos2}`)


    
}
main()