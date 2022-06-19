import{input,print} from './io_utils.js'

function main(){
    //entrada
    const numero = Number(input('Digite um número de 4 digitos: '))
    
    //processamento
    const milhar = Math.trunc(numero/1000)
    const resto1 = numero % 1000
    const centenas = Math.trunc(resto1/100)
    const resto2 = numero % 100
    const dezenas = Math.trunc(resto2/10)
    const unidades = resto2 % 10
    const soma = milhar + centenas + dezenas + unidades
    
    
    print(`A soma dos numeros é ${soma}`)
}
main()