import{print,input} from './io_utils.js'

function main(){
    //entrada
    const minutos = Number(input('Digite um valor: '))

    //processamento
    const horas = minutos / 60

    //saida
    print (`${minutos} minutos equivalem a ${horas} horas`)

}

main()