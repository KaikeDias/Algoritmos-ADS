import{input,print} from './io_utils.js'

function main(){
    //entrada
    const saque = Number(input('Digite o valor de saque: '))
    
    //processamento
    let valor_restante = saque
    const notas100 = Math.trunc(saque/100)
    valor_restante = valor_restante % 100
    const notas50 = Math.trunc(valor_restante/50)
    valor_restante = valor_restante % 50
    const notas20 = Math.trunc(valor_restante/20)
    valor_restante = valor_restante % 20
    const notas10 = Math.trunc(valor_restante/10)
    valor_restante = valor_restante % 10
    const notas5 = Math.trunc(valor_restante/5)
    valor_restante = valor_restante % 5
    const notas2 = Math.trunc(valor_restante/2)
    valor_restante = valor_restante % 2 
    const moedas1 = valor_restante
    

    //saida
    print(`Notas de 100: ${notas100}`)
    print(`Notas de 50: ${notas50}`)
    print(`Notas de 20: ${notas20}`)
    print(`Notas de 10: ${notas10}`)
    print(`Notas de 5: ${notas5}`)
    print(`Notas de 2: ${notas2}`)
    print(`Moedas de 1: ${moedas1}`)
    

}
main()