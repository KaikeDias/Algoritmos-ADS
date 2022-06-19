import{input,print} from './io_utils.js'

function main(){
    //entrada
    const numero = Number(input('Digite um número de 3 digitos: '))
    
    //processamento
    const centenas = Math.trunc(numero/100)
    const resto = numero % 100

    const dezenas = Math.trunc(resto/10)
    const unidades = resto % 10
    
    const numero_inverso = unidades*100 + dezenas*10 + centenas
    
    //saida
    print(`O inverso de ${numero} é ${numero_inverso}`)

}
main()