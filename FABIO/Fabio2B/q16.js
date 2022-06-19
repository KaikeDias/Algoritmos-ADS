import {input} from './io_utils.js'

function main(){
    //Entrada
    const tipo = input('Qual carne deseja, file, alcatra ou picanha? ')
    const quantidade = Number(input('Quantos kg? '))
    const forma_pagamento = input('Deseja pagar com o cartão tabajara? ')

    //Processamento
    let forma_de_pagamento = 0
    let valor_a_pagar = 0
    let desconto = 0
    if(forma_pagamento === 'sim'){
        forma_de_pagamento = 'cartão tabajara'
        valor_a_pagar = preco_total(tipo,quantidade) - (preco_total(tipo,quantidade) * 5/100)
        desconto = (preco_total(tipo,quantidade) * 5/100)
    }else{
        valor_a_pagar = preco_total(tipo,quantidade)
        forma_de_pagamento = 'outro'
    }
    
    //Saída
    console.log('-----CUPOM-FISCAL-----')
    console.log(`Tipo: ${tipo}`)
    console.log(`Quantidade: ${quantidade}Kg`)
    console.log(`Preço total: R$${preco_total(tipo,quantidade)}`)
    console.log(`Tipo de pagamento: ${forma_de_pagamento}`)
    console.log(`Valor do desconto: R$${desconto}`)
    console.log(`Valor a pagar: R$${valor_a_pagar}`)
    console.log('----------------------')


}

function preco_carne(tipo,quantidade){
    let preco_kg = 0
    if(tipo === 'file'){
        if(quantidade <= 5){
            preco_kg = 4.90
        }else{
            preco_kg = 5.80
        }
    }else if(tipo === 'alcatra'){
        if(quantidade <= 5){
            preco_kg = 5.90
        }else{
            preco_kg = 6.80
        }
    }else if(tipo === 'picanha'){
        if(quantidade <= 5){
            preco_kg = 6.90
        }else{
            preco_kg = 7.80
        }
    }
    return preco_kg
}

function preco_total(tipo,quantidade){
    const total = preco_carne(tipo,quantidade) * quantidade
    return total
}



main()