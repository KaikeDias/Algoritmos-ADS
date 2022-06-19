import { readFileSync } from 'fs'

function main(){
    const vendas_mensais = readFileSync('vendas.txt', 'utf-8').split('\n')
    let cashback_total = 0
    let vendas_totais = 0
    let maior = 0
    let menor = 10000000

    for(let vendas of vendas_mensais){
        const dados = vendas.split(' ')
        const nome = dados[0]
        const venda = Number(dados[1])
        const cashback = valor_cashback(venda)
        
        if(cashback > maior){
            maior = cashback
        }
        
        if(cashback < menor){
            menor = cashback
        }
        
        vendas_totais += venda
        cashback_total += cashback

        console.log(`Cliente = ${nome}`)
        console.log(`Compras (R$ ${venda})`)
        console.log(`Cashback = R$ ${cashback.toFixed(2)}`)
        console.log(`---------------------------`)
    }

    const med = media(cashback_total,vendas_mensais)
    const perc = percentual(cashback_total,vendas_totais)
    
    console.log(`Faturamento total: R$ ${vendas_totais.toFixed(2)}`)
    console.log(`Cashback distribuido: R$ ${cashback_total.toFixed(2)}`)
    console.log(`Percentual de cashback: ${perc.toFixed(2)}%`)
    console.log(`Maior Cashback: R$ ${maior.toFixed(2)}`)
    console.log(`Menor Cashback: R$ ${menor.toFixed(2)}`)
    console.log(`Cashback Médio: R$ ${med.toFixed(2)}`)
}

function media(cashback_total,vendas_mensais){
    return cashback_total / vendas_mensais.length
}

function percentual(cashback_total,vendas_totais){
    return cashback_total / vendas_totais * 100
}

function valor_cashback(venda){
    let cashback 

    if(venda <= 250){
        cashback = venda * 0.05
    }else if(venda > 250 && venda <= 500){
        cashback = venda * 0.07
    }else if(venda > 500 && venda <= 750){
        cashback = venda * 0.08
    }else if(venda > 750){
        cashback = 250*(5/100) + 250*(7/100) + 250*(8/100) + (venda-750)*(25/100) 
    }
    return cashback
}
    
main()