import {input} from './io_utils.js'

function main(){
    const salario = Number(input('Salario em R$: '))
    const objetivo = input('Qual o seu objetivo: ')
    const valor_objetivo = Number(input('Quanto custa para realizá-lo? '))
    const investimento_percentual = Number(input('Quanto deseja investir (em %): '))/100
    const taxa = Number(input('Taxa de juros(%): '))/100

    let saldo = 0
    let meses = 0
    let juros
    let investimento = salario * investimento_percentual

    while(saldo < valor_objetivo){
        saldo += investimento
        juros = saldo * taxa
        saldo += juros
        meses++
    }

    if(meses <= 12){
        console.log(`Voce cumrirá o objetivo "${objetivo}" em ${meses}`)
    }else{
        const anos = Math.trunc(meses/12)
        const mes = meses % 12
        console.log(`Voce cumrirá o objetivo "${objetivo}" em ${anos} ano(s) e ${mes} mes(es))`)
    }



}

main()