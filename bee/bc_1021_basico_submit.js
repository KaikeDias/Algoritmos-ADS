import {input,print} from './io_utils.js'

function main(){
    //entrada
    const saque = Number(input('saque: '))
    
    //processamento
    let dinheiro = saque * 100
    const notas100 = Math.trunc(dinheiro/10000)
    const resto1 = dinheiro % 10000
    const notas50 = Math.trunc(resto1/5000)
    const resto2 = resto1 % 5000
    const notas20 = Math.trunc(resto2/2000)
    const resto3 = resto2 % 2000
    const notas10 = Math.trunc(resto3/1000)
    const resto4 = resto3 % 1000
    const notas5 = Math.trunc(resto4/500)
    const resto5 = resto4 % 500
    const notas2 = Math.trunc(resto5/200)
    const resto6 = resto5 % 200
    const moedas1 = Math.trunc(resto6/100)
    const resto7 = resto6 % 100
    const moedas05 = Math.trunc(resto7/50)
    const resto8 = resto7 % 50
    const moedas025 = Math.trunc(resto8/25)
    const resto9 = resto8 % 25
    const moedas010 = Math.trunc(resto9/10)
    const resto10 = resto9 % 10
    const moedas005 = Math.trunc(resto10/5)
    const resto11 = resto10 % 5
    const moedas001 = Math.trunc(resto11)

    //saida
    print("NOTAS:")
    print(`${notas100} nota(s) de R$ 100.00`)
    print(`${notas50} nota(s) de R$ 50.00`)
    print(`${notas20} nota(s) de R$ 20.00`)
    print(`${notas10} nota(s) de R$ 10.00`)
    print(`${notas5} nota(s) de R$ 5.00`)
    print(`${notas2} nota(s) de R$ 2.00`)
    print("MOEDAS:")
    print(`${moedas1} moeda(s) de R$ 1.00`)
    print(`${moedas05} moeda(s) de R$ 0.50`)
    print(`${moedas025} moeda(s) de R$ 0.25`)
    print(`${moedas010} moeda(s) de R$ 0.10`)
    print(`${moedas005} moeda(s) de R$ 0.05`)
    print(`${moedas001} moeda(s) de R$ 0.01`)
}
main()