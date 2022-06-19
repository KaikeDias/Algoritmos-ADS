import{print,input} from './io_utils.js'

function main(){
    //entrada
    const numero = input('Digite um numero de 3 digitos: ')

    const C = Number(numero[0])
    const D = Number(numero[1])
    const U = Number(numero[2])
    //processamento
    const soma = C + D + U
    //saida
    print(`${soma}`)
}
main()
