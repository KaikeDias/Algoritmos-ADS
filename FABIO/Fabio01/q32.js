import{print,input} from './io_utils.js'

function main(){
    //entrada
    const numero = Number(input('Digite um numero de 3 digitos: '))

    //processamento
    const centenas = Math.trunc(numero / 100)
    const resto = numero % 100
    const dezenas = Math.trunc(resto / 10)
    const unidades = resto % 10
    const inverso = unidades*100 + dezenas*10 + centenas
    const diferença = numero - inverso

    //saida
    print(`A soma entre o numero e o seu inverso é ${diferença}`)
}
main()
