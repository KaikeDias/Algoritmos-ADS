import {input, print} from './io_utils.js'

function main(){
    //entrada
    const horas = Number(input('Digite um valor: '))

    //processamento
    const minutos = horas * 60

    //saida
    print (`${horas} horas equivalem a ${minutos} minutos`)

}

main()