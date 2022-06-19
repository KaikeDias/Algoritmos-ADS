import {input,print} from './io_utils.js'

function main(){
    //entrada
    const saque = Number(input('saque: '))
    
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
    print(saque)
    print(`${notas100} nota(s) de R$ 100,00`)
    print(`${notas50} nota(s) de R$ 50,00`)
    print(`${notas20} nota(s) de R$ 20,00`)
    print(`${notas10} nota(s) de R$ 10,00`)
    print(`${notas5} nota(s) de R$ 5,00`)
    print(`${notas2} nota(s) de R$ 2,00`)
    print(`${moedas1} nota(s) de R$ 1,00`)
}
main()