import {input} from './io_utils.js'

function main(){
    let nome = ''
    let preco
    let quantidade
    let valor_pago
    while (nome !== 'FIM'){
        nome = input('Nome do produto: ')
        if(nome === 'FIM'){
            break
        }
        preco = Number(input('Preço do produto: '))
        quantidade = Number(input('Quantidade: '))
        valor_pago = descontos(preco,quantidade)

        console.log(`Produto: ${nome} // Quantidade: ${quantidade} // Valor a pagar: ${valor_pago}`)
    }


}

function descontos(preco,quantidade){
    let preco_total = preco * quantidade

    if(quantidade > 10 && quantidade <= 20){
        preco_total -= preco_total * 0.1
    }else if(quantidade > 20 && quantidade <= 50){
        preco_total -= preco_total * 0.2
    }else if(quantidade > 50){
        preco_total -= 0.25
    }

    return preco_total
}

main()